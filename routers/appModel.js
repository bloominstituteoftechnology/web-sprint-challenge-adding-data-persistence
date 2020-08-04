const db = require("../data/dbconfig")

function getTasks(){
    return db("tasks")
}

function findTaskById(id) {
    return db("tasks")
        .where({id})
        .first()
}

function getItem(){
    return db("item")
}

function findItemById(id) {
    return db("item")
        .where({id})
        .first()
}

function getTo_do(){
    return db("to_do")
}

function findTo_doById(id) {
    return db("to_do")
        .where({id})
        .first()
}

function addItem(payload){
    return db("item")
        .insert(payload, "id")
        .then((item_id) => {
            const [id] = item_id
            return findItemById(id)
        })
}


function addTask(payload){
    return db("tasks")
        .insert(payload, "id")
        .then((item_id) => {
            const [id] = item_id
            return findTaskById(id)
        })
}

function addTodo(payload){
    return db("tasks")
        .insert(payload, "id")
        .then((item_id) => {
            const [id] = item_id
            return findTaskById(id)
        })
}

const getTodoWithTask = () => {
    return db("to_do")
        .join("tasks", "to_do.tasks_id", "tasks.id")
        .select("to_do.description as Task_Description", "to_do.notes as Task_Notes", "tasks.name as Project_Task", "tasks.description as Project_Description" )
}




module.exports = {
    getTasks,
    findTaskById,
    getItem,
    findItemById,
    getTo_do,
    findTo_doById,
    addItem,
    addTask,
    addTodo,
    getTodoWithTask,
}