const db = require("../data/db-config");

const findTasks = id => {
  return db
    .select("p.project_name", "p.project_description", "t.id", "t.task", "t.task_description", "t.completed")
    .from("tasks as t")
    .join("projects as p", "t.project_id", "=", "p.id")
    .where("p.id", "=", id)

}

module.exports = {
  findTasks
};