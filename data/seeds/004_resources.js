
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'swan', description: 'stop looking at me swan'},
        {id: 2, name: 'jean jacket', description: 'gotta look cool'},
        {id: 3, name: 'trans am', description: 'because why not'},
        {id: 4, name: 'macaroni', description: 'for macaroni projects'},
        {id: 5, name: 'blue crayons', description: 'the duck has to be blue'},
      ])
    })
}
