exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([{
          id: 1,
          project_id: "1",
          task: "finish the project",
          task_description: "know what is going on",
          completed: false
        },
        {
          id: 2,
          project_id: "1",
          task: "turn in retro",
          task_description: "create a pull request, complete retro form",
          completed: false
        },
        {
          id: 3,
          project_id: "1",
          task: "go to sleep",
          task_description: "you did it, go to bed",
          completed: false
        },
      ]);
    });
};