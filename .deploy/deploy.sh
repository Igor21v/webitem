#!/bin/bash
echo "Старт скрипта деплоя"  
cd /home/igor21v/webitem
npm run build:prod

rm -rf /var/www/webitem/html
mv /home/igor21v/webitem/build /var/www/webitem/html