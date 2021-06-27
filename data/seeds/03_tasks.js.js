exports.seed = async function (knex) {
  await knex("tasks").insert([
    {
      task_description: "Lorem ipsum1",
      task_notes: "Lorem ipsum dolor sit amet",
      task_completed: false,
      project_id: 1,
    },
    {
      task_description: "Lorem ipsum2",
      task_notes: "Lorem ipsum dolor sit amet",
      task_completed: false,
      project_id: 2,
    },
    {
      task_description: "Lorem ipsum3",
      task_notes: "Lorem ipsum dolor sit amet",
      task_completed: false,
      project_id: 3,
    },
    {
      task_description: "Lorem ipsum4",
      task_notes: "Lorem ipsum dolor sit amet",
      task_completed: false,
      project_id: 4,
    },
  ]);
};
