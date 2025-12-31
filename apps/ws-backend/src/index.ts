import dotenv from "dotenv";
import path from "path";
const possibleEnvPaths = [
  path.resolve(process.cwd(), ".env"),           
  path.resolve(process.cwd(), "../.env"),        
  path.resolve(process.cwd(), "../../.env"),        
];

for (const envPath of possibleEnvPaths) {
  const result = dotenv.config({ path: envPath });
  if (!result.error) {
    console.log(`Loaded .env from: ${envPath}`);
    break;
  }
}

import { WebSocketServer, WebSocket } from 'ws';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { JWT_SECRET } from '@repo/backend-common/config';
import { prismaClient } from "@repo/db/client"

const WS_PORT = Number(process.env.WS_PORT) || 8080;
const wss = new WebSocketServer({ port: WS_PORT });

interface User {
  ws: WebSocket;
  rooms: string[];
  userId: string;
}

const users: User[] = [];

function checkUser(token: string): string | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (typeof decoded == 'string') {
      return null;
    }

    if (!decoded || !decoded.userId) {
      return null;
    }
    return decoded.userId;
  } catch (e) {
    return null;
  }
  return null;
}

wss.on('connection', (ws, request) => {
  const url = request.url;
  if (!url) {
    return;
  }

  const queryParams = new URLSearchParams(url.split('?')[1]);
  const token = queryParams.get('token') || '';
  const userId = checkUser(token);

  if (userId == null) {
    ws.close();
    return null;
  }

  users.push({
    userId,
    rooms: [],
    ws,
  });
  ws.on('message',async  (data) => {
    const parsedData = JSON.parse(data as unknown as string);

    if (parsedData.type == 'join_room') {
      const user = users.find((x) => x.ws == ws);
      user?.rooms.push(parsedData.roomId);
    }

    if (parsedData.type == 'leave_room') {
      const user = users.find((x) => x.ws == ws);
      if (!user) {
        return;
      }
      user.rooms = user.rooms.filter((x) => x === parsedData.room);
    }

    if (parsedData.type == 'chat') {
      const roomId = parsedData.roomId;
      const message = parsedData.message;

      await prismaClient.chat.create({
        data : {
          roomId , 
          message , 
          userId
        }
      });
      
      users.forEach((user) => {
        if (user.rooms.includes(roomId)) {
          user.ws.send(
            JSON.stringify({
              type: 'chat',
              message: message,
              roomId,
            })
          );
        }
      });
    }
  });
});
