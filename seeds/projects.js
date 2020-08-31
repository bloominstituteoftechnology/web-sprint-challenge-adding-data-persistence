
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Sprint1',description:"Lorem ipsum dolor sit amet, ne usu eripuit imperdiet, putent impedit duo et. Pro eu sadipscing deterruisset. Semper scaevola praesent in duo, "},
        { name: 'Sprint2',description:"Lorem ipsum dolor sit amet, ne usu eripuit imperdiet, putent impedit duo et. Pro eu sadipscing deterruisset. Semper scaevola praesent in duo, "},
        { name: 'Sprint3',description:"Lorem ipsum dolor sit amet, ne usu eripuit imperdiet, putent impedit duo et. Pro eu sadipscing deterruisset. Semper scaevola praesent in duo, ", completed: true}
      ]);
    });
};
