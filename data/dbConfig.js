const environment = process.env.NODE_ENV || "development";

const knex = require('knex');
const knexfile = require('../knexfile');

const db = knex(knexfile.development);

module.exports = db;
