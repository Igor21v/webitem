#!/bin/bash
echo "Старт деплоя фронта"  
source ~/.nvm/nvm.sh
cd /home/igor21v/webitem
pwd
npm run build:prod

rm -rf /var/www/webitem/html
mv /home/igor21v/webitem/build /var/www/webitem/html
echo "Деплой фронта завершен"  