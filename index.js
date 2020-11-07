const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const projectRoute = require('./routes/projectRoute')
const resourceRoute = require('./routes/resourceRoute')

const server = express()


server.use(express.json(), helmet(), morgan('dev'))

server.use('/projects', projectRoute)
server.use('/resources', resourceRoute)

server.get('/', (req, res)=>{
    res.send('Hello World')
})

const port = process.env.PORT || 3000;

server.listen(port, ()=>{console.log(`Server is listening on ${port}`)})