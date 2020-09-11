const db = require('../data/db-config'); 

module.exports = {
    find, 
    findById, 
    add, 
    addToProject
};

//* finding functions *// 

// [🎠 working!] //
function find(){
    return db('resources');
}; 

// [🎠 working!] // 
function findById(id){
    return db('resources')
        .where({ id })
        .first();
}; 

//* manipulating functions *// 

// [🎠 working!] // 
function add(item){
    return db('resources')
        .insert(item, 'id')
            .then(([id]) => {
                return findById(id)
            });
}; 

// [🎠 working!] // 
function addToProject(item){
    return db('projects_resources')
        .insert(item)
        .then(([id]) => id);
}; 