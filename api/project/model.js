// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
    addProject(project) {
        return db('projects')
          .insert(project, 'id')
          .then(([id]) => this.getProjectById(id));
      },
      getProjects() {
        return db('projects').select('*');
    },
    getProjectById(id) {
        return db('projects').where({ id }).first();
      },
}