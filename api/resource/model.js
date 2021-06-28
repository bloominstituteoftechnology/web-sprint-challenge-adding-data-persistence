const db = require('../../data/dbConfig');

function getResources() { // INCLUDING PROJECTS NAME
  return db('ressources as r')
    .leftJoin('project as p', 'p.project_id', 'r.project_id')
    .select('a.resource_id', 'a.resource_name', 's.project_name');
}

async function createResource(resource) {
  const [resource_id] = await db('ressources').insert(resource);
  return getResources().where({ resource_id }).first();
}


module.exports = {
  getResources,
  createResource,
};
