module.exports = {
  findResources,
  addResources,
  resourceById,
};

const db = require("../data/db-config");
// returns all resources
function findResources() {
  return db("resources");
}
// gets resources by their id 
function resourceById(id) {
  return db("resources").where({ id });
}
//adds a resource
function addResources(addition) {
  return db("resources")
    .insert(addition)
    .then((ids) => {
      const id = ids[0];
      return resourceById(id);
    });
}
