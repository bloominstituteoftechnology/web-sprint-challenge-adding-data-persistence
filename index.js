const server = require("./server");
const ProjectRoutes = require("./project-routes/project-routes");
const ResourceRoutes = require('./resource-routes/resources-routes')
const TasksRouter = require('./tasks-routes/tasks-routes')

server.use("/projects", ProjectRoutes);
server.use("/resources", ResourceRoutes);
server.use("/tasks", TasksRouter);

server.get("/", (req, res) => {
  res.status(200).json({ API: "WORKING" });
});
