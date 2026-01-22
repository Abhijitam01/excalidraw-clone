#!/bin/bash

# Start HTTP Backend
echo "Starting HTTP Backend on port 3001..."
cd apps/http-backend && PORT=3001 node dist/index.js &
HTTP_PID=$!

# Start WebSocket Backend  
echo "Starting WebSocket Backend on port 8080..."
cd ../ws-backend && WS_PORT=8080 node dist/index.js &
WS_PID=$!

echo "Backends started!"
echo "HTTP Backend PID: $HTTP_PID"
echo "WebSocket Backend PID: $WS_PID"
echo ""
echo "To stop the backends, run:"
echo "kill $HTTP_PID $WS_PID"
