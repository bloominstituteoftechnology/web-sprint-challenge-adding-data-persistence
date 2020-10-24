// 1 => Build a car
// 2 => Build a better AI
// 3 => Build a PC
exports.seed = async function(knex) {
  await knex("projects_resources").insert([
    { project_id: 1, resource_id: 1 },
    { project_id: 1, resource_id: 2 },
    { project_id: 1, resource_id: 3 },
    { project_id: 2, resource_id: 4 },
    { project_id: 2, resource_id: 5 },
    { project_id: 2, resource_id: 6 },
    { project_id: 3, resource_id: 7 },
    { project_id: 3, resource_id: 8 },
    { project_id: 3, resource_id: 5 },
  ])
}