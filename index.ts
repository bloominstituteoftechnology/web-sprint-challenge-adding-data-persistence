const express = require("express");
import {projectsRouter} from "./routers/projects";
import {resourceRouter} from "./routers/resources";
import {taskRouter} from "./routers/tasks";

const server = express();
const port = process.env.PORT || 4000;

server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use("/api/tasks", taskRouter);
server.use("/api/resources", resourceRouter);

//@ts-ignore todo: write types for these params
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong",
    })
});

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
});