module.exports = {
   apps: [
      {
         name: 'my-app',
         script: 'npm run start',
         cwd: '/Users/mrvautin/Documents/Code/my-app/',
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
         key: '/Users/mrvautin/.ssh/id_rsa',
         ssh_options: 'ForwardAgent=yes',
         ref: 'origin/main',
         repo: 'git@github.com:mrvautin/my-app.git',
         path: '/var/www/html/my-app',
         'post-deploy': 'sh nextjs-pm2-deploy.sh'
      }
   }
};