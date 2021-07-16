const db = require('../../data/dbConfig')

async function getProjects() {
    // return db('projects')
    const result = await db('projects as p')
        .select('p.project_id', 'p.project_name', 'p.project_description', 'p.project_completed')
        // Boolean flag2 = (intValue == 1)? true : false
        // const flag = (p.project_completed)? 1 : 0;
        // const completed = Boolean(result.project_completed)

    return result
    // const projects = {
    //     project_id: result.project_id,
    //     project_name: result.project_name,
    //     project_description: result.project_description,
    //     // project_completed: completed
    //     project_completed: Boolean(result.project_completed)
    
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