// build your `Project` model here
const db = require('../../data/dbConfig');
const { map } = require('../server');

const getAll = async () => {
    try {
        const projects = await db('project');
        return projects
            .map(project => 
                project.project_completed === 0 ? 
                    {...project, project_completed: false} : 
                    {...project, project_completed: true});
    } catch (error) {
        return {error: `could not get projects`}
    }
}

const getById = async id => {
    // return db('project').where({project_id: id}).first();
    try {
        const project = await db('project').where({ project_id: id }).first();
        return {
            ...project, 
            project_completed: project.project_completed === 0 ? 
                false : 
                true
        }
    } catch (error) {
        return {error: `could not get project`}
    }
}

const insert = record => {
    return db('project')
        .insert(record);
}


module.exports ={
    getAll,
    getById,
    insert
}