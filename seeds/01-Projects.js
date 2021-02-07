
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {'project_description': 'This is a description'},
        {'project_description': 'This is a description'},
        {'project_description': 'This is a description'},
        {'project_description': 'This is a description'},
    
      ]);
    });
};
