const db = require('../data/db-config'); 

module.exports = {
    find, 
    findById, 
    add
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

//* manipulating functions *// 

// [🎠 working!] // 
function add(item){
    return db('tasks')
        .insert(item, 'id')
            .then(([id]) => {
                return findById(id)
            });
}; 