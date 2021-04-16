// build your `Project` model here
const db = require('../../data/dbConfig.js');

const get = async () => {
    const projects = await db('projects');

    const result = projects.map(project => {
        if (project.project_completed === 0) {
            return{
                ...project,
                project_completed: false
            }
        }else{
            return{
                ...project,
                project_completed: true
            }
        }
    })
    return result;
}

const getById = async (id) => {
    const project = await db('projects')
        .where('project_id', id).first()

    if(project.project_completed === 0){
        project.project_completed = false;
    }else{
        project.project_completed = true;
    }

    return project;
}

const post = (project) => {
    return db('projects')
        .insert(project)
        .then(id => {
            return getById(id[0]);
        })
}

module.exports = {
    get, 
    getById,
    post
}