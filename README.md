# AC Walla Website

Developed Using ReactJS, Tailwind CSS, Firebase (to be integrated soon for auth)

# AC Wallah Backend Server

A standalone Express.js backend server for AC Wallah application.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=your_db_host
DB_PORT=5432
DB_NAME=your_db_name

# JWT Configuration
JWT_SECRET=your_jwt_secret

# CORS Configuration (Optional)
FRONTEND_URL=your_frontend_url
```

3. Initialize the database:
```bash
node setup_db.js
```

4. Start the server:
- Development mode: `npm run dev`
- Production mode: `npm start`

## API Endpoints

### Authentication
- POST `/api/auth/login` - User login
- POST `/api/auth/signup` - User registration

### Users
- GET `/api/users` - Get all users
- GET `/api/users/:id` - Get user by ID
- PUT `/api/users/:id` - Update user
- DELETE `/api/users/:id` - Delete user

### AC Listings
- GET `/api/ac-listings` - Get all AC listings
- POST `/api/ac-listings` - Create new AC listing
- GET `/api/ac-listings/:id` - Get AC listing by ID
- PUT `/api/ac-listings/:id` - Update AC listing
- DELETE `/api/ac-listings/:id` - Delete AC listing

## Health Check
- GET `/health` - Server health check endpoint
