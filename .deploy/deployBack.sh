#!/bin/bash
echo "Старт деплоя бэка"  
cd /home/igor21v/webitem
git pull
pwd
sudo pm2 stop 0
sudo pm2 start 0
echo "Деплой бэка завершен"  