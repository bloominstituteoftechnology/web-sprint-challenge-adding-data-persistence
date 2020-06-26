const db = require("../data/config")

function getResources() {
    return db("resources")
}

module.exports = {
    getResources,
}