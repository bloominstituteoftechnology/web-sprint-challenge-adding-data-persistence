const db = require("../database/db-config");

const getTasks = () => {
    return db("tasks as t")
    .select(
        "t.id",
        "t.taskName",
        "t.taskDescription",
        "p.projectName",
        "p.projectDescription",
        "t.taskCompleted"
        )
    .join("projects as p", "p.id", "t.projects_id");
};

const addTask = data => {
    return db("tasks").insert(data);
};

module.exports = {
  getTasks,
  addTask
};