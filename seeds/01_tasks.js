exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          project_id: 1,
          description: "Task Test Description 1",
          notes: "Task Test Notes 1",
          completed: 1,
        },
        {
          project_id: 1,
          description: "Task Test Description 2",
          notes: "Task Test Notes 2",
          completed: 0,
        },
        {
          project_id: 2,
          description: "Task Test Description 3",
          notes: "Task Test Notes 3",
          completed: 1,
        },
      ]);
    });
};
