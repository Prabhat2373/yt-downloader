module.exports = {
   apps: [
      {
         name: 'my-app',
         script: 'npm run start',
         cwd: '/Users/prabhattambe/Documents/github/yt-downloader',
         env: {
               NODE_ENV: 'development'
         },
         env_production: {
               NODE_ENV: 'production'
         }
      }
      
   ],
   deploy: {
      production: {
         user: 'my-user',
         host: 'my-server',
         key: '/Users/prabhattambe/.ssh/id_rsa',
         ssh_options: 'ForwardAgent=yes',
         ref: 'origin/main',
         repo: 'https://github.com/Prabhat2373/yt-downloader',
         path: '/var/www/html/my-app',
         'post-deploy': 'sh nextjs-pm2-deploy.sh'
      }
   }
};