// build your server here
const express = require("express")

const projects = require("./project/router")
const resources = require("./resource/router")
const tasks = require("./task/router")

const app = express()

app.use(express.json())

app.use("/api", projects)
app.use("/api", resources)
app.use("/api", tasks)

module.exports = app
