exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("task")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("task").insert([
        {
          task_id: 1,
          task_description: "1. put together pc because we already know how!",
          task_notes: "",
          task_completed: false,
          project_id: 1,
        },
        {
          task_id: 2,
          task_description:
            "1. Cmon! We have been doing this for months now!  2. Really?....",
          task_notes: "",
          task_completed: false,
          project_id: 2,
        },
        {
          task_id: 3,
          task_description:
            "1. Ok, fair enough! We gave you some help! 2. Get reading!",
          task_notes: "",
          task_completed: false,
          project_id: 3,
        },
      ]);
    });
};
