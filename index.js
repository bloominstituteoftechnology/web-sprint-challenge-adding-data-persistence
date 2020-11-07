const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const projectRoute = require('./migrations/20200911113142_projects.js')
const resourceRoute = require('./migrations/20200911132624_resources.js')

const server = express()


server.use(express.json(), helmet(), morgan('dev'))

//server.use('/projects', projectRoute)
//server.use('/resources', resourceRoute)

server.get('/', (req, res)=>{
    res.send('Hello World')
})

const port = process.env.PORT || 3000;

server.listen(port, ()=>{console.log(`Server is listening on ${port}`)})