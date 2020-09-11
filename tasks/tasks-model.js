const db = require('../data/db-config'); 

module.exports = {
    find, 
    findById, 
    add, 
    findByProjectId
};

//* finding functions *// 

// [🎠 working!] //
function find(){
    return db('tasks');
}; 

// [🎠 working!] // 
function findById(id){
    return db('tasks')
        .where({ id })
        .first();
}; 

// [🎠 working!] // 
function findByProjectId(id){
    return db('tasks')
        .where({ project_id: id });
}; 

//* manipulating functions *// 

// [🎠 working!] // 
function add(item){
    return db('tasks')
        .insert(item, 'id')
            .then(([id]) => {
                return findById(id)
            });
}; 