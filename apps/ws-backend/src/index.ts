import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

import { WebSocketServer, WebSocket } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { prismaClient } from "@repo/db/client";

const WS_PORT = Number(process.env.WS_PORT) || 8080;
const wss = new WebSocketServer({ port: WS_PORT });

interface User {
  ws: WebSocket;
  rooms: string[];
  userId: string;
  name: string;
}

const users: User[] = [];

function checkUser(token: string): string | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    return decoded.userId;
  } catch (e) {
    return null;
  }
}

wss.on("connection", async (ws, request) => {
  const url = request.url;
  if (!url) return;

  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("token") || "";
  const userId = checkUser(token);

  if (userId == null) {
    ws.close();
    return;
  }

  const dbUser = await prismaClient.user.findUnique({
    where: { id: userId },
    select: { name: true },
  });

  const name = dbUser?.name || "Anonymous";

  const currentUser: User = {
    userId,
    name,
    rooms: [],
    ws,
  };
  users.push(currentUser);

  ws.on("message", async (data) => {
    const parsedData = JSON.parse(data as unknown as string);

    if (parsedData.type == "join_room") {
      currentUser.rooms.push(parsedData.roomId);
      broadcastUserList(parsedData.roomId);
    }

    if (parsedData.type == "leave_room") {
      currentUser.rooms = currentUser.rooms.filter(
        (x) => x !== parsedData.roomId
      );
      broadcastUserList(parsedData.roomId);
    }

    if (parsedData.type == "cursor_move") {
      const { roomId, x, y } = parsedData;
      users.forEach((user) => {
        if (user.ws !== ws && user.rooms.includes(roomId)) {
          user.ws.send(
            JSON.stringify({
              type: "cursor_move",
              userId,
              name,
              x,
              y,
            })
          );
        }
      });
    }

    if (parsedData.type == "chat") {
      const roomId = parsedData.roomId;
      const message = parsedData.message;

      await prismaClient.chat.create({
        data: {
          roomId: Number(roomId),
          message,
          userId,
        },
      });

      users.forEach((user) => {
        if (user.rooms.includes(roomId)) {
          user.ws.send(
            JSON.stringify({
              type: "chat",
              message: message,
              roomId,
            })
          );
        }
      });
    }
  });

  ws.on("close", () => {
    const index = users.indexOf(currentUser);
    if (index !== -1) {
      const rooms = [...currentUser.rooms];
      users.splice(index, 1);
      rooms.forEach((roomId) => broadcastUserList(roomId));
    }
  });
});

function broadcastUserList(roomId: string) {
  const roomUsers = users
    .filter((u) => u.rooms.includes(roomId))
    .map((u) => ({ userId: u.userId, name: u.name }));

  users.forEach((u) => {
    if (u.rooms.includes(roomId)) {
      u.ws.send(
        JSON.stringify({
          type: "user_list",
          users: roomUsers,
        })
      );
    }
  });
}
