eval "$(ssh-agent -s)" &&
ssh-add -k ~/.ssh/id_rsa &&

cd /var/www/react &&
git pull && 
npm install &&
npm run build
