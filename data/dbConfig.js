const knex = require('knex')
const config = require('../knexfile')

// selects development object from knexfile
const db = knex(config.development)

module.exports = db