// build your `Project` model here
const db = require('../../data/dbConfig')

function getResources() { 
    return db('resources')
}