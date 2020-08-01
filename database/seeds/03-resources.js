exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resourceName: "Computer"},
        {resourceName: "VScode"},
        {resourceName: "CodeRed"}
      ]);
    });
};