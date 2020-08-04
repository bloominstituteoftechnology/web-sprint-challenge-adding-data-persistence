const express = require("express");

const devRouter = ('/db-router.js')
const server = express();

server.use(express.json());

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})