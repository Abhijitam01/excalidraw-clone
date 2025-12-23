import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "./config";

const wss = new WebSocketServer({ port: 8080 });
console.log("WebSocket server started on ws://localhost:8080");

wss.on("connection", (ws , request) => {
  const url = request.url;
  if(!url) {
    return ;
  }

  const queryParams = new URLSearchParams(url.split('?')[1]);
  const token = queryParams.get('token') ;

  if(!token){
    ws.close();
    return  ;
  }

  let decoded: JwtPayload;

  try { 
    decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch {
    ws.close();
    return;
  }

  if (!decoded.userId) {
    ws.close();
    return;
  }


  ws.on("message", (message) => {
    ws.send(`Echo: ${message}`);
  });

  
});