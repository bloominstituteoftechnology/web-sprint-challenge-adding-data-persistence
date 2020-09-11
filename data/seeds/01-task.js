
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, description: 'drink water'},
        {id: 2, description: 'eat food'},
        {id: 3, description: 'win at life'}
      ]);
    });
};
