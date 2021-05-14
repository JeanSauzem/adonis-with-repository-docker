#!/bin/bash
sleep 20
cp .env.example .env && rm -rf nodes_modules package-lock.json &&  npm install &&  adonis migration:run && adonis seed && node server.js
