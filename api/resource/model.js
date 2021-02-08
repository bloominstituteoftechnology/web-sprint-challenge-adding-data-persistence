// build your `Resource` model here
const db = require("../../data/dbConfig");

function find() {
  return db("resources");
}

async function findById(id) {
  try {
    const task = await db.select("*").from("resources").where({ id });
    return task;
  } catch (error) {
    return error;
  }
}

async function insert(newResource) {
  const resourceId = await db("resources").insert(newResource);
  return await findById(resourceId);
}

module.exports = {
  find,
  findById,
  insert,
};
