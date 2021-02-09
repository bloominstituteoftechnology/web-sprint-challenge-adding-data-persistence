// Complete your db configuration using the `environment` variable.
const knex = require('knex')
const env = process.env.NODE_ENV || "development";
const config = require('../knexfile');

const db = knex(config[env]);

module.exports = db;