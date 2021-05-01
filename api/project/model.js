// build your `Project` model here
const db = require('../../data/dbConfig.js');

// middleware fuction
const mutIntToBool = (num) => {
    if (num == 0) {
        return false;
    } else {
        return true;
    }
};

async function getAllProjects() {
    const projects = await db('projects');
    console.log(projects);

    const mutDta = projects.map( (proj) => {
        proj.project_completed = mutIntToBool(proj.project_completed);
    });
    // console.log(mutDta);
    // console.log(projects);
    return projects;

}


async function createProject(project) {
    const [project_id] = await db('projects').insert(project);
    const newProj = await db('projects as p').where('p.project_id', project_id);

    const mutDta = newProj.map( (proj) => {
        proj.project_completed = mutIntToBool(proj.project_completed);
    });

    return newProj[0];
}

module.exports = {
    getAllProjects,
    createProject,
};