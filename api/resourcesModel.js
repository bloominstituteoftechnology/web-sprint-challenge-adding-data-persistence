const db = require("../database/db-config");

const getResources = () => {
  return db("resources");
};

const addResource = data => {
  return db("resources")
    .insert(data, "id")
    .then(ids => {
      const [id] = ids;

      return db("resources")
        .where({ id })
        .first()
        .then(resource => {
          return resource;
        });
    });
};

module.exports = {
  getResources,
  addResource
};