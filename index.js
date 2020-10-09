const express = require('express');
const helmet = require('helmet');

const server = express();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`API running on port ${PORT}`);)