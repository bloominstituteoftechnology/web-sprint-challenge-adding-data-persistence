const db = require("../data/db-config")

module.exports ={
    findById,
    find,
    add,
    findResources
}

//get a list of projects
function find(){
    return db("projects")
}


//get project by id 
function findById(id){
    return db('projects')
        .where({id})
        .first()
}

//add project
function add(project){
    return db("projects")
    .insert(project, "id")
    .then(([id]) => {
        return findById(id);
    })
    .catch(err => {
        console.log(err)
    })
}

function findResources(id){
    return db("projects")
        .join("resources", "projects.id", "resources.project_id")
        .select("resources.name", "projects.name as project name")
        .where({project_id:id})
}