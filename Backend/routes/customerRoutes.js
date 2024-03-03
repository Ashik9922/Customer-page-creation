const pool = require('../dbConfig')
const express = require('express');
const router = express.Router();

//const customerController = require('../controllers/customerController');

router.get('/customers', (req, res) => {
    pool.query('SELECT * FROM cdetails', (error, results) => {
        if (error) {
        throw error
        }
        res.status(200).json(results.rows)
    })
});

module.exports = router;
