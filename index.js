const express = require("express")
// const rR = require("./data/routers/resourceRouter")
// const tR = require("./data/routers/taskRouter")

const server = express()

server.use(express.json())

// server.use("/resource", rR)
// server.use("/task", tR)


const port = 4000;
server.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`)
})