// Complete your db configuration using the `environment` variable.
const knex = require('knex');
const env = process.env.NODE_ENV || "development";
const configs = require('./knexfile'); 

const db = knex(configs[env]);

module.exports = db;