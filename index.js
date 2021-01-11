// start your server here
const server = require("./api/server")

const port = process.env.PORT || 8080

server.listen(port, () => {
    console.log(`running on port ${port}`)
})
