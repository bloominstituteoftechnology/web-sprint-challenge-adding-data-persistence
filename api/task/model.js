const db = require('../../data/dbConfig.js')

const getAll = () => {
    return db("tasks")
  }

  module.exports = {
    getAll
  };