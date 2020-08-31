
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { description: 'Fork Project', notes: "Create a forked copy of this project", completed: false, project_id: 1},
        { description: 'create branch', notes:"Create a new branch: git checkout -b <firstName-lastName>.",completed: false,project_id:1},
        { description: 'push commits', notes:"Push commits: git push origin <firstName-lastName>",completed: false,project_id:1}
      ]);
    });
};
