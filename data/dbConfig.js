// Complete your db configuration using the `environment` variable.
const environment = process.env.NODE_ENV || "development";

const knex = require("knex");

const config = require("../knexfile.js");

module.exports = knex(config[environment]);
