
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {description: "use former projects for help", name: 'Old Projects'},
        {description: "ask TL for help after 20 mins of trying", name: 'TL'},
        {description: "Google is a powerful tool", name: 'Google'}
      ]);
    });
};
