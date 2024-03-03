const pool = require('../dbConfig');

const getAllCustomers = async () => {
  const query = 'SELECT * FROM Details';
  const { rows } = await pool.query(query);
  return rows;
};

module.exports = {
  getAllCustomers,
};
