const db = require('../data/db-config'); 

module.exports = {
    find, 
    findById
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