const knex = require('knex');

const config = require('../knexfile.js');

const database = "development";

module.exports = knex(config[database]);