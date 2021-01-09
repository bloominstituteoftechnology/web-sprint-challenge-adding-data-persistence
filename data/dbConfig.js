// Complete your db configuration using the `environment` variable.
const environment = process.env.NODE_ENV || "development";
const knex = require("knex");

const knexfile = require("../knexfile.js");

// change to "production" and update knexfile.js to use postgres.
// const production = "development";

module.exports = knex(knexfile[environment]);