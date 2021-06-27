// build your `Resource` model here
const db = require("../../data/dbConfig");

async function find() {
  return await db("resources");
}

async function add(resource) {
  const newResource = await db("resources").insert(resource, "id");
  return db("resources").where("resource_id", newResource);
}

module.exports = {
  find,
  add,
};
