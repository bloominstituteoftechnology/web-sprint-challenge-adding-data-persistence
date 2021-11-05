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
  return tasks;
}

module.exports = { findAll };
