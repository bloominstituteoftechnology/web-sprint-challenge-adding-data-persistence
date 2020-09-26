const db = require("../data/db-config.js");

// PROJECTS

function find(){
    return db("projects");
};

function findById(id) {
    return db("projects")
        .where({ id })
        .first();
}

function add(value){
    return db("projects")
        .insert(value, "id")
        .then(id => {
            return findById(id)
        });
}

// RESOURCES
function findResources() {
    return db("resources");
}

function addResource(resource) {
    return db("resources")
        .insert("resource")
        .then(value => {
            return findResource(value);
        });
}

// TASKS
function findTasks(id) {
    return db("projects")
        .join("tasks", "projects.id", "tasks.project_id")
        .select("projects.project_name", "tasks.task_desc", "tasks.task_completed")
        .where({ project_id: id })
        .orderBy("resources.id");
}

function findTaskById(id) {
    return db("tasks")
        .where({ id })
        .first();
}

function addTask(value){
    return db("tasks")
        .insert(value, "id")
        .then(id => {
            return findById(id)
        });
}

module.exports = {
    find,
    findById,
    add,
    findResources,
    addResource,
    findTasks,
    findTaskById,
    addTask
};