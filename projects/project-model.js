const db =require( '../data/connection')

module.exports ={
    get,
    getById,
    addProject
}


function get(){
    return db('projects')
}

function getById(id){
    return db('projects')
        .where({id})
        .first()
}

function addProject(projects){
    return db('projects')
    .insert(projects)
    .then(projects =>{
        return getById(projects[0])
    })
}