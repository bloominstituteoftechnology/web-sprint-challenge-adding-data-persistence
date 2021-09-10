const db = require('../../data/dbConfig')

async function get() {
    const response = await db("tasks as t")
      .join("projects as p", "t.project_id", "=", "p.project_id")
      .select(
        "t.task_id",
        "t.task_description",
        "t.task_notes",
        "t.task_completed",
        "p.project_name",
        "p.project_description"
      );
  
      return response.map((task) => {
        return {
          ...task,
          task_completed: !! task.task_completed,
        };
      });
  }


function getById(task_id){
    return db('tasks').where({ task_id }).first()
}

function insert(task){
    return db('projects').insert(task)
        .then((ids)=>{
            return getById(ids[0])
        })
}

module.exports = { get, getById, insert}

