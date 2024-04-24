# echo "Deploy starting..."

# npm run install || exit

# BUILD_DIR=temp npm run build || exit

# if [ ! -d "temp" ]; then
#   echo '\033[31m temp Directory not exists!\033[0m'  
#   exit 1;
# fi

# rm -rf .next

# mv temp .next

# pm2 reload all --update-env
# pm2 reset all

# echo "Deploy done."

echo "Deployment starting..."

# install dependencies if any
yarn || exit

# set build folder to `temp` and build
BUILD_DIR=temp yarn build || exit

if [ ! -d "temp" ]; then
  echo '\033[31m temp directory does not exist!\033[0m'  
  exit 1;
fi

# delete `.next` folder
rm -rf .next

# rename `temp` folder to `.next`
mv temp .next

# run next start
pm2 reload all --update-env
pm2 reset all

echo "Deployment done."