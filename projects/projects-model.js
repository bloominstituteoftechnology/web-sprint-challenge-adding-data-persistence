const db = require('../data/db-config'); 

module.exports = {
    find, 
    findById, 
    add
};

//* finding functions *// 

// [🎠 working!] //
function find(){
    return db('projects');
}; 

// [🎠 working!] // 
function findById(id){
    return db('projects')
        .where({ id })
        .first();
}; 

//* manipulating functions *// 

// [🎠 working!] // 
function add(item){
    return db('projects')
        .insert(item, 'id')
            .then(([id]) => {
                return findById(id)
            });
}; 