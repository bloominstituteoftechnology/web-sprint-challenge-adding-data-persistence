const server = require('./server/server')

const PORT = process.env.port || 5000

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})