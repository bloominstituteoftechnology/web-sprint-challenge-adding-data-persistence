const express = require('express');

// import router(s)

const server = express();

server.use(express.json());
// plug in appropriate router
// server.use('/api/schemes', SchemeRouter);

server.use('*', (req, res, next) => {
    next({status: 404,
        message: 'not found'
    })
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server;