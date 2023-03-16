cd ~/webitem
npm run build:prod

sudo rm -rf /var/www/webitem/html
sudo mv ~/webitem/build /var/www/webitem/html