
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('projects').del()
    // .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: "computer", project_description: 'Device used to enter data', project_completed: 0 },
        { project_name: "phone", project_description: 'Device used view data', project_completed: 1 },
        { project_name: "books", project_description: 'Information stored on pages', project_completed: 0 }
      ]);
    // });
};
