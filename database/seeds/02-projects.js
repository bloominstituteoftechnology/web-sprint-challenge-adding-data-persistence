exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
      {
        projectName: "Lambda Unit 4", 
        projectDescription: "What still needs to be done before build week",
        completed: false,

      },
      {
        projectName: "Update portfolio", 
        projectDescription: "Keep my portfolio up to date for potential clients or employers",
        completed: false,
      },
      ]);
    });
};