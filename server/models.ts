const { Pool } = require("pg");

const PG_URI = process.env.DATABASE_PG_URI;

// const pool = new Pool({
//   host: PG_URI,
//   user: process.env.RDS_USER,
//   password: process.env.RDS_PASSWORD,
//   port: process.env.RDS_PORT,
// });

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text: string, params: any, callback: any) => {
    return pool.query(text, params, callback);
  },
};
