module.exports = {
  apps: [
    {
      name: 'KradPay-WebSite',
      script: 'npm',
      args: 'start',
      cwd: '/root/KradPay-web/KradPay-WebSite',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      ignore_watch: ['node_modules', '.next', '.git'],
      log_file: '/var/log/pm2/KradPay-WebSite.log',
      out_file: '/var/log/pm2/KradPay-WebSite-out.log',
      error_file: '/var/log/pm2/KradPay-WebSite-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3031,
      }
    }
  ]
};