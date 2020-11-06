
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {id: 1, name: 'Blue Duck', description:'never seen a blue duck before', completed: true},
        {id: 2, name: 'Finish the 3rd grde', description:"billy is in the third grade", completed: false},
        {id: 3, name: 'graduate', description: 'self-explanatory', completed: false}
      ])
    })
}
