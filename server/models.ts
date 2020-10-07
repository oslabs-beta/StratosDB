const { Pool } = require('pg');
import dotenv from 'dotenv';

// INITIALIZE CONFIGURATION
dotenv.config();

const pool = new Pool({
  user: process.env.RDS_USER,
  host: process.env.RDS_ENDPOINT,
  database: process.env.RDS_DB_NAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
});

module.exports = {
  query: (text: string, params: any, callback: any) => {
    return pool.query(text, params, callback);
  },
};
