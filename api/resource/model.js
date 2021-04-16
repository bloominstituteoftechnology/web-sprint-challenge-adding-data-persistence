// build your `Resource` model here
const db = require('../../data/dbConfig');
 const get = () => {
     return db('resources');
 };

 const getById = (id) => {
     return db('resources')
        .where('resource_id', id)
        .select('resource_name')
        .first();
 };

 const post = (resource) => {
    return db('resources')
        .insert(resource)
        .then(id => {
            return getById(id[0]);
        })
}

const update = (id, changes) => {
    return db('resources')
        .where('resource_id', id)
        .update(changes)
}

const remove = (id) => {
    return db('resources')
        .where('resource_id', id)
        .delete();
}

 module.exports = {
     get,
     getById, 
     post,
     update,
     remove
 }