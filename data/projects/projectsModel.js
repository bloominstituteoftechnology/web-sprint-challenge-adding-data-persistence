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

module.exports = {
    getProjects
}