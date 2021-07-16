const db = require('../../data/dbConfig')

function getProjects() {
    return db('projects')
}

function addProject() {

}

module.exports = {
    getProjects,
    addProject,
};