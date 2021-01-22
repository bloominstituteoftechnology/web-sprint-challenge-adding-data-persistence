
exports.up = function(knex) {
  return knex.schema
    .createTable('project_resources', tbl => {
        tbl.increments('project_resource_id')
        tbl.string('project_name').notNullable()
        tbl.integer('pr-project_id').unique()
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
        tbl.string('resource_name').notNullable()
        tbl.integer('pr-resource_id').unique()
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
            .onDelete('RESTRICT')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
};
