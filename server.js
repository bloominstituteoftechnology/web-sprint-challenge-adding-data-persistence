const express = express();

const devRouter = require('./db-router.js');

const config = require('/db-config.js')

const DB = require('/db-helper.js')

server.use(express.json());

server.use('/api/project', devRouter);


module.exports = server;