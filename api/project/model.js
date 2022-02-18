// build your `Project` model here
const db = require('../../data/dbConfig')

const getAllProjects = async () => {
    const projects = await db('projects')
    const solution = []
    for(let i = 0; i < projects.length; i++) {
        let outcome = {
            project_id: projects[i].project_id,
            project_name: projects[i].project_name,
            project_description: projects[i].project_description,
            project_completed: projects[i].project_completed === 0 ? false : true,
        }
        solution.push(outcome)
    }
    return solution
};

const create = async (proj) => {
    const [id] = await db("projects").insert(proj)
    return db("projects").where("project_id", id).first()
};

module.exports = {
    getAllProjects,
    create
}