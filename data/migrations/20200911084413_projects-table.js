
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments()
      tbl.string('project_name').unique().notNullable()
      tbl.text('project_details')
      tbl.boolean('completed').defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects');
};
