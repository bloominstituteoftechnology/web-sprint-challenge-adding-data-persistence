// build your `Project` model here
const db=require('../../data/dbConfig')

module.exports={
    getProjects,
    addProject,
    getProjectById
    
}

function getProjects(){
    return db('projects as p')
    .select('p.project_name', 'p.project_description','p.project_id','p.project_completed')
}

function addProject(project){
    return db('projects').insert(project)
    .then (([project_id])=>db('projects').where('project_id', project_id).first())
}


function getProjectById(id){
    let schemaObject=db('projects').where('project_id',id).first()
    if (!schemaObject) {return Promise.resolve(null)}
    else{return schemaObject}

}