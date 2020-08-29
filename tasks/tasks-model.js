const db = require("../data/config")
// const { innerJoin } = require("../data/config")

function find() {
	return db("tasks")
}

function add(tasks){
    return db("tasks as t")
    .insert(tasks)
}

function findTasksById(projectId){
    return db("tasks as t")
        .innerJoin("projects_tasks as pt", "t.task_id","pt.tsk_id")
        .innerJoin("projects as p", "p.project_id", "pt.proj_id")
        .where("p.project_id", projectId)
        .first() 
}
module.exports = {
    find,
    add,
    findTasksById
}