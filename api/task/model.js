// build your `Task` model here
const db = require("../../data/dbConfig");

function find() {
  return db("tasks");
}

async function findById(id) {
  try {
    const task = await db.select("*").from("tasks").where({ id });
    return task;
  } catch (error) {
    return error;
  }
}

async function insert(newTask) {
  try {
    const taskId = db("tasks").insert(newTask);
    return findById(taskId);
  } catch (error) {
    return error;
  }
}

module.exports = {
  find,
  findById,
  insert,
};
