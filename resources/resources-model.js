const db = require("../data/dbConfig");

function getResources() {
  return db("resources");
}

function addResources(newResource) {
  return db("resources").insert(newResource);
}

module.exports = {
  getResources,
  addResources,
};
