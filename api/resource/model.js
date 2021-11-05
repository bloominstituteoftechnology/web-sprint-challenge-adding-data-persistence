const db = require("../../data/dbConfig.js");

async function findAll() {
  const resources = await db("resources");
  return resources;
}

async function postResource(resource) {
  const [resource_id] = await db("resources").insert(resource);
  const [newResource] = await getByID(resource_id);
  return await newResource;
}

async function getByID(resource_id) {
  const resource = await db("resources").where("resource_id", resource_id);
  if (resource) {
    return resource;
  }
}

module.exports = {
  findAll,
  postResource,
  getByID,
};
