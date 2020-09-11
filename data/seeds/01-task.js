
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, description: 'drink water', description: 'hydrate', completed: false},
        {id: 2, description: 'eat food', completed: false},
        {id: 3, description: 'win at life', completed: false}
      ]);
    });
};
