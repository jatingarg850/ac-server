#!/bin/bash

# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 globally
sudo npm install -y pm2 -g

# Create app directory
sudo mkdir -p /var/www/ac-wallah
sudo chown -R $USER:$USER /var/www/ac-wallah

# Clone the repository (replace with your repository URL)
git clone https://github.com/jatingarg850/ac-server.git /var/www/ac-wallah

# Navigate to app directory
cd /var/www/ac-wallah

# Install dependencies
npm install

# Create .env file (you'll need to fill this with your values)
cat > .env << EOL
PORT=5000
DATABASE_URL=your_database_url_here
JWT_SECRET=your_jwt_secret_here
NODE_ENV=production
FRONTEND_URL=your_frontend_url_here
EOL

# Start the application with PM2
npm run prod

# Save PM2 process list and configure to start on system startup
pm2 save
sudo pm2 startup systemd

# Install and configure Nginx
sudo apt install -y nginx
sudo rm /etc/nginx/sites-enabled/default

# Create Nginx configuration
sudo tee /etc/nginx/sites-available/ac-wallah << EOL
server {
    listen 80;
    server_name your_domain_or_ip;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOL

# Enable the site
sudo ln -s /etc/nginx/sites-available/ac-wallah /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Print success message
echo "Deployment completed! Please update the .env file with your configuration values." 