// build your `Task` model here
const db = require('../../data/dbConfig');



function find() {
    return db('tasks')
}


// const findById = id => {
//     return db('tasks').where({id}).first()
//     }

function insert(task) {
    return db("tasks")
      .insert(task)
      .then(([id]) => get(id));
  }

module.exports = { find, insert,};