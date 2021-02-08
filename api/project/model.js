// build your `Project` model here
const db = require('../../data/dbConfig');

module.exports = {
    get, 
    getProjectsByID,
    insert
}

//GET projects
async function get(){
    return await db('Projects');
}
//GET projectsByID

async function getProjectsByID(id){
    return await db.select(id).from('Projects');
}

//POST  insert new Project
async function insert(proj){
    return await db.insert(proj).into('Projects')
}