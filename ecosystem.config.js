// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'zionxai',
      script: 'npm',
      args: 'start',
      env_production: {
        NODE_ENV: 'production',
        NEXT_PUBLIC_SITE_URL: 'https://zionxai.com',
      },
    },
  ],
};