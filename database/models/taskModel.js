const db = require('../database/dbConfig.js')

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
}


async function add(task) {
    const [id] = await db('tasks').insert(task)
    return findById(id)
};
function find() {
    return db('tasks')
};
function findBy(filter) {
    return db('tasks').where(filter);
};
function findById(id) {
    return db('tasks').where({id}).first();
};
function update(id, changes) {
    return db(tasks).where({id}).update(changes);
};
function remove(id) {
    return db(tasks).where('id', Number(id)).del();
};