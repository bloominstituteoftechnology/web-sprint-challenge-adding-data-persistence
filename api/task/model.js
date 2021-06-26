const db = require('../../data/dbConfig.js');



// Helper Functions
const convertBooleansFromSQLite = (task) => {

    task.task_completed = (task.task_completed ? true : false)
    console.log("in the helper: ", task)
    return task
}

const convertBooleansToSQLite = (task) => {

    task.task_completed = (task.task_completed ? 1 : 0)
    console.log("in the helper: ", task)
    return task

}


const getAll = () => {

  const tasks = db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    // .select("p.project_name")
    .select("t.task_description", "t.task_notes", "t.task_completed", "p.project_name", "p.project_description")
 

  return tasks.then((tasks) => {
    console.log("tasks after the join", tasks)
      tasks.forEach(task =>
      convertBooleansFromSQLite(task)
      )
      return tasks

  })
}


const getById = (id) => {
    // .first() gives us just the object ... not in an array [{}]
    const task = db("tasks").where("task_id", id).first()

    return task.then((task) => {
        return convertBooleansFromSQLite(task)
    })
}

const create = async (newTask) => {
    console.log("newTask in the create: ", newTask)
    newTask = convertBooleansToSQLite(newTask);
    console.log("in create, newTask after converted: ", newTask)
    const [id] = await db("tasks").insert(newTask);
    return getById(id)

}

module.exports = {
    getAll,
    getById,
    create
};
