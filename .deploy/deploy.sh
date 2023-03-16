cd ~/webitem
npm run build:prod

rm sudo -rf /var/www/webitem/html
mv sudo ~/webitem/build /var/www/webitem/html