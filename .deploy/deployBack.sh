#!/bin/bash
echo "Старт деплоя бэка"  
cd /home/igor21v/webitem
git pull
pwd
pm2 stop 0
pm2 start ~/webitem/json-server/index.js
echo "Деплой бэка завершен"  