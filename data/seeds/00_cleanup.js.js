exports.seed = async function (knex) {
  await knex("projects").truncate();
  await knex("resources").truncate();
  await knex("tasks").truncate();
  await knex("project_resources").truncate();
};
