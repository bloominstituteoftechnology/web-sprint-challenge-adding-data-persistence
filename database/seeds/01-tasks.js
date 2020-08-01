exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {projects_id: 1, taskName: "Modules", taskDescription: "Work on Modules for Unit 4", taskCompleted: false},
        {projects_id: 1, taskName: "Notes", taskDescription: "Clone instructor notes", taskCompleted: false},
        {projects_id: 2, taskName: "Add", taskDescription: "Add new projects to portfolio", taskCompleted: false},
      ]);
    });
};