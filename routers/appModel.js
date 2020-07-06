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






module.exports = {
    getTasks,
    findTaskById,
    getItem,
    findItemById,
    getTo_do,
    findTo_doById,
    addItem
}