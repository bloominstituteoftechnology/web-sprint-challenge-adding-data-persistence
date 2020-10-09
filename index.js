const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ hello: 'node34' })
})

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`API running on ${PORT}`))