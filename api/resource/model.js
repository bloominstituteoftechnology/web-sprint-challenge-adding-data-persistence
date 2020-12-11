// build your `Resource` model here
const db = require('../../data/dbConfig')

module.exports = {
    addResource(resource) {
        return db('resources')
          .insert(resource, 'id')
          .then(() => this.getResource());
      },
    getResource() {
        return db('resources').select('*');
    },
}