const db = require('../../data/dbConfig');


function getProjects() {
  return db('projects')
}

function insertProject(project) {
    return db('projects').insert(project)
}

module.exports = {
getProjects,
insertProject
};