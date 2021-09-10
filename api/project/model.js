const db = require('../../data/dbConfig')

async function get(){
    const response= await db('projects')

    return response.map((project)=>{
        return { 
            ...project, 
            project_completed: !! project.project_completed }
    })
}


function getById(project_id){
    return db('projects').where({ project_id }).first()
}

function insert(project){
    return db('projects').insert(project)
        .then((ids)=>{
            return getById(ids[0])
        })
}

module.exports = { get, getById, insert}
