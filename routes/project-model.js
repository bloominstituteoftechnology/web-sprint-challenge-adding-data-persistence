const db = require("../data/config");

function add(project) {
  return db("projects").insert(project);
}
function FindProjectTasks(id) {
  return db("projects as p")
    .join("tasks as t", "p.id", "t.project_id")
    .select(
        "p.id",
      "p.name as ProjectName",
      "p.description as ProjectDecription",
      
      "t.description",
      "t.notes",
      "t.completed"
    )
    .where({ project_id: id });
}


module.exports = {
  add,
  FindProjectTasks,
};
