// build your `Task` model here
const db = require('../../data/dbConfig')
module.exports = {
    createTask,
    getTask,

}

async function createTask(tasks){ 
    return await db('resources')
                .insert(tasks)

}

function getTask() { 
    return db('resources')
}
