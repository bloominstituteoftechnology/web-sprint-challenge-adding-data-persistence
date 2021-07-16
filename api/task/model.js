// build your `Task` model here
const db = require("../../data/dbConfig");
const { getById } = require("../project/model");

exports.getAll = () => {
   
    return db("tasks").leftJoin('projects.project_name', 'projects.project_description', 'projects.project_id')
}

exports.addnewId = async (id) => {
return db("tasks").insert(id);

}

exports.newTask = async (task) => {
    const [id] = await db("tasks")
    .insert(task)
    return getById(id)

}

