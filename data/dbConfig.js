// No need to change this file
const knex = require('knex');
const config= require('../knexfile.js');

const db = knex(process.env.NODE_ENV === "production" ? config.production : config.development)

// What knex configuration is actually used?
// That depends on the value of process.env.NODE_ENV!
module.exports = db
