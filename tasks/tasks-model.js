const db = require("../data/db-config")

module.exports = {
    findById,
    add,
    getTasks
}


//get project by id 
function findById(id){
    return db('tasks')
        .where({id})
        .first()
}

//add a task
function add(task){
    return db("tasks")
    .insert(task, "id")
    .then(([id]) => {
        return findById(id);
    })
    .catch(err => {
        console.log(err)
    })
}


//get list of tasks
function getTasks(){
    return db("tasks")
        .join("projects", "projects.id", "tasks.project_id")
        .select("tasks.description as task description", "projects.name as project name", "projects.description as project description")
}