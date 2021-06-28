// build your `Resource` model here
const db = require('../../data/dbConfig')
module.exports = {
    createResources,
    getResources,

}

async function createResources(resource){ 
    return await db('resources')
                .insert(resource)
}



function getResources() { 
    return db('resources')
}
