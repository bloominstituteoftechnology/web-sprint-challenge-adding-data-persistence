
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1, 
          project_name: 'Become a Rap Superstar',
          project_details: `It's time to realize my true potential as a rap god`,
          completed: false
        },
        {
          id: 2, 
          project_name: 'Operation: Closet Org',
          project_details: `Label all the totes, organize all the clothing by season, shoes on a shoe rack, crispy`,
          completed: false
        },
        {
          id: 3, 
          project_name: 'Build that App',
          project_details: `Build that app your friend had that great idea for, fight the urge to roll your eyes`,
          completed: false
        }
      ]);
    });
};
