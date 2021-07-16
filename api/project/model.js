// build your `Project` model here
const db = require('../../data/dbConfig')

const get = () => {
    return db('projects')
}

const insert = (data) => {
    return db("projects").insert(data).then(ids => ids[0])
} 

module.exports = {
    get,
    insert,
}