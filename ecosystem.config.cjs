module.exports = {
  apps: [{
    name: 'ac-wallah-server',
    script: 'index.js',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production',
      PORT: 8080
    },
    error_file: '/tmp/ac-wallah-error.log',
    out_file: '/tmp/ac-wallah-out.log',
    log_file: '/tmp/ac-wallah-combined.log',
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
  }]
}; 