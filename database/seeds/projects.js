
exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'generic name 1', description: 'rowValue1', complete: 1},
        {name: 'generic name 2', description: 'rowValue2', complete: 1},
        {name: 'generic name 3', description: 'rowValue3', complete: 1}
      ]);
    });
};
