import pg from 'pg';
const { Pool } = pg;

export const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_Ybrl6uhX2LVc@ep-muddy-sun-a841goek-pooler.eastus2.azure.neon.tech/neondb?sslmode=require'
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export default pool; 