// build your `Task` model here
const db= require("../../data/dbConfig")

function find() {
    return db("tasks as t")
    .innerJoin("projects as p", "t.project_id", "p.project_id")
    .select("t.task_id", "t.task_description", "t.task_notes", "t.task_completed","p.project_name","p.project_description");
}

function add(task) {
    return db("tasks")
        .insert(task)
        .into("tasks")
}

module.exports={
    find,
    add
}