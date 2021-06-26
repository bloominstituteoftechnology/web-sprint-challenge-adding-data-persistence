
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('tasks').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task_description: "type", task_notes: 'achieve 100 wpm', task_completed: 0 , project_id: 1 },
        { task_description: "return voicemails", task_notes: 'Call clients back', task_completed: 1, project_id: 2 },
        { task_description: "Add notes", task_notes: 'Add notes to book', task_completed: 1,project_id: 3  }
      ]);
    // });
};
