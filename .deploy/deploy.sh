#!/bin/bash
echo "Старт скрипта деплоя"  
cd ~/webitem
npm run build:prod

rm -rf /var/www/webitem/html
mv ~/webitem/build /var/www/webitem/html