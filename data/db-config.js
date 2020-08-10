const knex = require("knex")
const knexfile = require("../knexfile")

const configOptions = process.env.DB_CONFIGURATION || "development";

module.exports = knex(knexfile[configOptions]);