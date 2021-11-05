const db = require('../../data/dbConfig')

const getAll = () => {
    return db('resources')
}

module.exports = {
    getAll
}