
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: "buy concrete mix", notes: "the cost was $200", completed: false}
      ]);
    });
};
