const express = require('express');
const DB = require('/db-config.js');
const router = express.Router();

router.get('/project', (req, res) => {
    DB.find().then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json({err: 'Fail to get data'})
    })
})