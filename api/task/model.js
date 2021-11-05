const db = require("../../data/dbConfig.js");

async function findAll() {
  const tasks = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
  tasks.map((task) => {
    if (task.task_completed === 1) {
      task.task_completed = true;
    } else task.task_completed = false;
  });
  return tasks;
}

async function postTask(task) {
  const [task_id] = await db("tasks").insert(task);
  const [newTask] = await getByID(task_id);
  newTask.task_completed === 0
    ? (newTask.task_completed = false)
    : (newTask.task_completed = true);
  return await newTask;
}

async function getByID(task_id) {
  const task = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    )
    .where("task_id", task_id);
  if (task) {
    return task;
  }
}

module.exports = { findAll, postTask };
