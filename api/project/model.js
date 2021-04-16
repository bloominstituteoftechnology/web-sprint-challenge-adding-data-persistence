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

module.exports = {get}