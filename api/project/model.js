// build your `Project` model here
const db = require('../../data/dbConfig');

const booleanConvert = project => {
    if (project.project_completed === 0 || !project.project_completed) {
        return {...project, 'project_completed': false};
    } else {
        return {...project, 'project_completed': true};
    }
};

async function getById(id){
    const newProject = await db('project as p')
        .where('p.project')
        .first()
    return booleanConvert(newProject)
}

async function getAll() {
    const projects = await db('projects as p');
    const projectsBoolean =  projects.map(project => {
        return booleanConvert(project);
    });
    return projectsBoolean;
}

async function createProject() {
    const booleanConvert = project => {
        if (project.project_completed === false || !project.project_completed) {
            return {...project, 'project_completed': 0}
        } else {
            return {...project, 'project_completed': 1}
        }
    }
    const [project_id] = await db('projects').insert(booleanConvert(project))
    return getById(project_id)
}

module.exports = {
    getAll,
    getById,
    createProject,
}