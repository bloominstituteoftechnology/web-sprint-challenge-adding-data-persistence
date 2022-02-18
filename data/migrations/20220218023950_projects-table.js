
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects')
    .createTable('resources')
    .createTable('tasks')
    .createTable('project_resources')
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
