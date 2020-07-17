
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Knit Sweater', description: "knit a sweater"},
        { name: 'Clean Kitchen', completed: true}
     
      ]);
    });
};
