// build your `Project` model here
const db = require('../../data/dbConfig')
module.exports = {
    getResources,

}
function getResources() { 
    return db('resources')
}

