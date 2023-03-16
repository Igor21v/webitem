cd ~/webitem
npm run build:prod

rm -rf ~/../var/www/webitem/html
mv ~/webitem/build ~/../var/www/production_project/html