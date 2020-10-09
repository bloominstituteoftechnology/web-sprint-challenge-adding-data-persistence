
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          task_description: "Draw the plans",
          notes: "Double check material list",
          completed_status: 0,
          project_id: 1
        },
        {
          task_description: "Make the dough",
          notes: "not too much flour",
          completed_status: 0,
          project_id: 2
        }
      ]);
    });
};
