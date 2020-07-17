
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name', 256).unique().notNullable();
      tbl.string('description', 1024);
      tbl.boolean('complete').defaultTo(0)
  })
  .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name', 256).unique().notNullable();
      tbl.string('description', 1024);
  })
  .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('description', 1024).notNullable();
      tbl.string('notes', 1024);
      tbl.boolean('complete').defaultTo(0)
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
