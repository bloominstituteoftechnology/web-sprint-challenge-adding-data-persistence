const db = require('../../data/dbConfig.js');

// const getAll = () => {
//     console.log("in the project model getAll")
//     return db("projects")
//   }


const getAll = () => {
    const projects = db("projects")
    projects.forEach((project) => {
        convertBooleansFromSQLite(project)
    })
    return projects
  }

  /*

    Boolean(Number("0")); // false
    Boolean(Number("1")); // true
  */

  const convertBooleansToSQLite = (project) => {


    return convertedProject
    }

  const convertBooleansFromSQLite = (project) => {

    project.project_completed = (!!parseInt(project.project_completed) ? true : false)
    // if (project.project_completed === 
    return project
    }

  const getById = (id) => {
    // return db("projects").where("project_id", id).first()
    // .first() gives us just the object ... not in an array [{}]
    const project = db("projects").where("project_id", id).first()
    return convertBooleansFromSQLite(project)
  }

const create = async (newProject) => {
    const [id] = await db("projects").insert(newProject);
    return getById(id)
}

  module.exports = {
    getAll,
    getById,
    create
  };
