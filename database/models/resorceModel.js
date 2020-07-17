const db = require('../database/dbConfig.js')

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
}


async function add(resource) {
    const [id] = await db('resources').insert(resource)
    return findById(id)
};
function find() {
    return db('resources')
};
function findBy(filter) {
    return db('resources').where(filter);
};
function findById(id) {
    return db('resources').where({id}).first();
};
function update(id, changes) {
    return db(resources).where({id}).update(changes);
};
function remove(id) {
    return db(resources).where('id', Number(id)).del();
};