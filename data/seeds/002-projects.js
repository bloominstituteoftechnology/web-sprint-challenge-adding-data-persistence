exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Remodel Home', description: 'Remodel the primary residence. Upgrade kitchen and bathrooms.'},
        {project_name: 'Rebuild Backyard', description: 'Repave the backyard and add a swimming pool.'}
      ]);
    });
};
