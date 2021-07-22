const db = require('../../data/dbConfig');

function getResources() {
  return db('resources')
}

function createResource(resource) {
    return db('resources').insert(resource)
}


// async function createResource(resource) {
//   const [resource_id] = await db('ressources').insert(resource);
//   return getResources().where({ resource_id }).first();
// }


module.exports = {
  getResources,
  createResource,
};
