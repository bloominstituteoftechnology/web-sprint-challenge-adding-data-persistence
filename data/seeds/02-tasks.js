exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          task_description: "make data folder",
          task_notes: "fill with useful things",
          completed: 1,
          project_id: 1,
        },
        {
          task_description: "turn in on time",
          task_notes: "before 1:00",
          completed: 0,
          project_id: 1,
        },
        {
          task_description: "locate a fairy",
          task_notes: "need a woodland being to guide you to it",
          completed: 1,
          project_id: 2,
        },
        {
          task_description: "have the fairy guide you to it's fairy ring",
          task_notes: "need a special staff to travel with the ring",
          completed: 0,
          project_id: 2,
        },
        {
          task_description: "Run fast",
          task_notes: "just like... do it",
          completed: 0,
          project_id: 3,
        },
      ]);
    });
};
