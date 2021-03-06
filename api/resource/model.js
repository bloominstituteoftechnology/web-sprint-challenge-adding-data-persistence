// build your `Resource` model here
const db = require("../../data/dbConfig")

function getResources() {
    return db("*").from("Recource").orderBy("recource_id")
}

async function addResource(resource) {
    const [recource_id] = await db("Recource").insert(resource)
    return db("*").from("Recource").where(recource_id)
}

module.exports = {
    getResources,
    addResource
}