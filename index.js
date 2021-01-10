const express = require('express')
const helmet = require('helmet')
const ProjectRouter = require('./api')
const server= express()

server.use(helmet())
server.use(express.json())
server.use('/api',ProjectRouter)

server.use((err,req,res,next) => {
    console.log(err)
    res.json(500).json({
        message: "Something went wrong"
    })
})

server.listen(5000,() => {
    console.log('Running at http://localhost:5000')
})