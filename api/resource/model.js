// build your `Resource` model here


module.exports = {
    findResources,
    addResources,
    resourceById,
  };
  
  const db = require('../../data/dbConfig')
  // returns all the Resources
  function findResources() {
    return db('resources');
  }
  // gets resources by id 
  function resourceById(id) {
    return db('resources').where({ id });
  }
  //adds resource(s)
  function addResources(addition) {
    return db('resources')
      .insert(addition)
      .then((ids) => {
        const id = ids[0];
        return resourceById(id);
      });
  }