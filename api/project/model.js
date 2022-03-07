// build your `Project` model here

const db = require('../../data/dbConfig.js')

function getProjects() {
    return db('projects');
}

async function insert(project) {
    const [project_id] = await db('projects').insert(project);
    return db('projects').where({ project_id }).first();
}

module.exports = { getProjects, insert };
