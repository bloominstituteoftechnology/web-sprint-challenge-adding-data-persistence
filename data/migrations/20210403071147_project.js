
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id');
        tbl.text('project_name')
            .notNullable()
            .unique();
        tbl.text('project_description')
        tbl.integer('project_completed')
            .defaultTo(0)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
};
