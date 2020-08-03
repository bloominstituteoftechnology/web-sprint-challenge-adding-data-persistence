const db = require('../dbConfig');
const mappers = require("./mapper");

function getProjects(id) {
    let query = db('projects');
  
    if (id) {
      return query
        .where('id', id)
        .first()
        .then((project) => {
          if (project) {
            return mappers.projectToBody(project);
          } else {
            return null;
          }
        });
    } else {
      return query.then((projects) => {
        return projects.map((project) => mappers.projectToBody(project));
      });
    }
  }
  function insert(project) {
    return db("projects")
      .insert(project, "id")
      .then(([id]) => mappers.projectToBody({...project, id: id}));
  }

module.exports = {
    getProjects,
    insert
}