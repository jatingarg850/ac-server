module.exports = {
  apps: [{
    name: 'ac-server',
    script: 'index.js',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    kill_timeout: 3000,
    wait_ready: true,
    listen_timeout: 10000,
    env_production: {
      NODE_ENV: 'production',
      PORT: 8080,
      HOST: '0.0.0.0',
      DEBUG: '*'
    },
    env_development: {
      NODE_ENV: 'development',
      PORT: 8080,
      HOST: 'localhost',
      DEBUG: '*'
    },
    error_file: '/tmp/ac-server-error.log',
    out_file: '/tmp/ac-server-out.log',
    log_file: '/tmp/ac-server-combined.log',
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
  }]
}; 