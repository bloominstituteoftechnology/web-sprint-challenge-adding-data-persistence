const db = require('../dbConfig');
const mappers = require("./mapper");

function getResources(id) {
    let query = db('resources');
  
    if (id) {
      return query
        .where('id', id)
        .first()
        .then((resource) => {
          if (resource) {
            return mappers.resourceToBody(resource);
          } else {
            return null;
          }
        });
    } else {
      return query.then((resources) => {
        return resources.map((resource) => mappers.resourceToBody(resource));
      });
    }
  }
  function insert(resource) {
    return db("resources")
      .insert(resource, "id")
      .then(([id]) => mappers.resourceToBody({...resource, id: id}));
  }

module.exports = {
    getResources,
    insert
}