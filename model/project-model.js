const db = require('../data/db-config.js');

module.exports = {
    //functions here
    getAll(){
        return db('projects')
    },
    getById(id) {
        // return db('projects').where({ id }).first()
        return db('projects').where({ id })
      },
      create(post) {
        return db('projects').insert(post)
      },
      update(id, post) {
        return db('projects').where({ id }).update(post)
      },
      delete(id) {
        return db('projects').where({ id }).del()
      }
}