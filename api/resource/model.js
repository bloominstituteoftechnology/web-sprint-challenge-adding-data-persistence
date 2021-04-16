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

 module.exports = {
     get,
     getById
 }