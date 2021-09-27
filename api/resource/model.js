const db = require("../../data/db-config");

async function getAllResources() {
  const resourceRows = await db("resource");
  return resourceRows;
}

module.exports = {
  getAllResources,
};
