const db = require('../../data/dbConfig')

async function getProjects() {
    return db('projects')
    // const result = await db('projects as p')
    //     // .select('p.project_id', 'p.project_name', 'p.project_description', 'p.project_completed')
    //     .select('p.*')
  
   
    // const projects = {
    //     project_id: result[0].project_id,
    //     project_name: result[0].project_name,
    //     project_description: result[0].project_description,
    //     project_completed: function getCompletedValue () {
    //         if (result.project_completed === 0) {
    //         return false
    //     } else if (result.project_completed === 1) {
    //         return true
    //     }
    //         return getCompletedValue
    //     },

    // }

    // return projects

}

function addProject(project) {
    return db('projects').insert(project)
        // .select('projects.project_name')
        // .first()
}

module.exports = {
    getProjects,
    addProject,
};