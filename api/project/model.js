// build your `Project` model here
const db = require('../../data/dbConfig');
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

const insert = async record => {
    try {
        const projectId = await db('project')
            .insert(record);
        return getById(projectId[0]);
    } catch (err) {
        return {error: `could not post project`}
    }
}


module.exports ={
    getAll,
    getById,
    insert
} 