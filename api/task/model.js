const db = require("../../data/db-config");

async function getAllTasks() {
  const tasksRows = await db("tasks");
  return tasksRows;
}

module.exports = {
  getAllTasks,
};
