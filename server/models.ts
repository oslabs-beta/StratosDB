const { Pool } = require('pg');

const PG_URI = process.env.DATABASE_PG_URI;

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text: string, params: any, callback: any) => {
    return pool.query(text, params, callback);
  },
};