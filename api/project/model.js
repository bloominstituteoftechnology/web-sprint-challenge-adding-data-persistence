// build your `Project` model here


const db = require('../../data/dbConfig');


function find() {
    return db('projects');
}





function insert(project) {
    return db("projects")
      .insert(project)
      .then(([id]) => get(id));
  }
// const create = async project => {
//     const [id] = await db('projects').insert(project)
//     return findById(id)
//   }

module.exports = { find, insert }