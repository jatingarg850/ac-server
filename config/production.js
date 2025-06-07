export default {
    port: process.env.PORT || 5000,
    dbConfig: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT || 5432,
        ssl: {
            rejectUnauthorized: false
        }
    },
    corsOrigin: process.env.FRONTEND_URL || 'http://your-domain.com',
    jwtSecret: process.env.JWT_SECRET
}; 