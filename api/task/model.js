// build your `Task` model here
const db = require("../../data/dbConfig");

const getTasks = () => {
  return db("task");
};

const postATask = (task) => {
  return db("task").insert(task);
};

module.exports = {
  getTasks,
  postATask,
};
