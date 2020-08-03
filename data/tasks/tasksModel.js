const db = require('../dbConfig');
const mappers = require("./mapper");

function getTasks(id) {
    let query = db('tasks');
  
    if (id) {
      return query
        .where('id', id)
        .first()
        .then((task) => {
          if (task) {
            return mappers.taskToBody(task);
          } else {
            return null;
          }
        });
    } else {
      return query.then((tasks) => {
        return tasks.map((task) => mappers.taskToBody(task));
      });
    }
  }
  function insert(task) {
    return db("tasks")
      .insert(task, "id")
      .then(([id]) => mappers.taskToBody({...task, id: id}));
  }

module.exports = {
    getTasks,
    insert
}