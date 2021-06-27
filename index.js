// start your server here
const server = require('./api/server')
const PORT = 4000

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})