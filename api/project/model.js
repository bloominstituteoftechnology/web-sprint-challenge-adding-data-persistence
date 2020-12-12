const db = require('../../data/dbConfig');

module.exports = {
    addPj,
    pjList,
};


function addPj(newPj){
    return db('projects').insert(newPj);
};

function pjList(){
    return db('projects');
};


