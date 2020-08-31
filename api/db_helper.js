const db = require('../data/dbConfig');

module.exports ={
    add,
    allResources,
    allProjects,
    allTasks,
    addProject,
    addTask,
}

async function add(data){
    console.log(data.name)
    await db('resource').insert({
        name:data.name,
        description:data.description
    })
}

async function addProject(data){
    await db('project').insert({
        name:data.name,
        description:data.description
    })
}
async function addTask(id,data){
    await db('task').insert({
        project_id:id,
        desc:data.desc,
        notes:data.notes,
    })
}

async function allResources(){
    return db('resource')
        .select('*')
}

async function allProjects(){
    return db('project')
        .select('*')
}

async function allTasks(){
    return db('task')
        .join('project','project.id','=','project_id' )
        .select('task.id as taskId', 'task.desc as taskDescription',
            'task.notes as taskNotes','task.completed as taskCompleted',
            'project.name as projectName','project.description as projectDescription')
        .orderBy('task.id')

}

async function getProjectResources(id){
    return db('project')
        .join('project_resouces','project_resources.project_id',
            '=')
}


