// start your server here
const server = require('./api/server');

const PORT = process.env.PORT || 8001;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
})

