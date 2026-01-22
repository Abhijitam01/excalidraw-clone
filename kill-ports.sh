#!/bin/bash

echo "Killing processes on ports 3000, 3001, 3003, and 8080..."

for port in 3000 3001 3003 8080; do
  pids=$(lsof -ti:$port 2>/dev/null)
  if [ -n "$pids" ]; then
    echo "Killing processes on port $port: $pids"
    kill -9 $pids 2>/dev/null
  else
    echo "Port $port is free"
  fi
done

echo "Done!"

