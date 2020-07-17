const knex = require('knex');

const config = require('../knexfile.js');

const knexConfig = config.development;

module.exports = knex(knexConfig);