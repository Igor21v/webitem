#!/bin/bash
echo "Старт скрипта деплоя"  
source ~/.nvm/nvm.sh
cd /home/igor21v/webitem
echo "Текущая директория:"  
pwd
npm run build:prod

rm -rf /var/www/webitem/html
mv /home/igor21v/webitem/build /var/www/webitem/html