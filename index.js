const express = require('express');

const api_server = require('./server.js');

const server = express();

const PORT = process.env.PORT || 5000;

server.use(api_server)

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});