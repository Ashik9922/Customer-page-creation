const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'demo',
  password: 'sumithnani',
  port: 5432,
});

module.exports = pool;
