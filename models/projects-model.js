const db = require('../data/config')

module.exports = {
    /// function names
    findProject
}

function findProject() {
    return db('projects')
}