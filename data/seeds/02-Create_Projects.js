const projects = [
  {
    project_name: "Build name API",
    project_description: "Build desc APIs",
    project_completed: [0],
  },
  {
    project_name: "project_lambda_2",
    project_description: "description_2",
    project_completed: [0],
  },
  {
    project_name: "project_lambda_3",
    project_description: "description_3",
    project_completed: [0],
  },
];
const resources = [
  { resource_name: "resource_lambda_1", description: "[0]" },
  { resource_name: "resource_lambda_2", description: "[0]" },
  { resource_name: "resource_lambda_3", description: "[0]" },
];
const project_resources = [
  { task_id: 1, resources_id: 1 },
  { task_id: 1, resources_id: 2 },
  { task_id: 2, resources_id: 3 },
];
const tasks = [
  {
    task_description: "description_01",
    task_notes: "take a note_1",
    task_nr: 1,
    project_id: 1,
    project_completed: [0],
  },
  {
    task_description: "description_02",
    task_notes: "spell a note_2",
    task_nr: 2,
    project_id: 1,
    project_completed: [0],
  },
  {
    task_description: "description_03",
    task_notes: "read a note_3",
    task_nr: 1,
    project_id: 2,
    project_completed: [0],
  },
];

exports.seed = async function (knex) {
  await knex("projects").insert(projects);
  await knex("resources").insert(resources);
  await knex("tasks").insert(tasks);
  await knex("project_resources").insert(project_resources);
};
