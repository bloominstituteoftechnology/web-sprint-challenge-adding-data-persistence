// build your `Project` model here
const db = require('../../data/dbConfig')
module.exports = {
    createProject,
    getProject,

}

async function createProject(projects){ 
    return await db('project')
                .insert(projects)
}



function getProject() { 
    return db('project')
}

