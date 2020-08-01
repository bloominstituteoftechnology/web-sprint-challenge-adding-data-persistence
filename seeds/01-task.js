
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {description: "buy concrete mix", notes: "the cost was $200", completed: ""}
      ]);
    });
};
