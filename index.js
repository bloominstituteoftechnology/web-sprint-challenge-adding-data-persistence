// start your server here
require('dotenv').config();
const server = require('./api/server');

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`API running on ${PORT}`))

server.get('/', (req, res) => {
    res.status(200).json({ hello: "it's working!" })
})