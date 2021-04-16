
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id');
        tbl.string('project_name', 128).notNullable();
        tbl.string('project_description', 128);
        tbl.boolean('project_completed').defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments('resource_id');
        tbl.string('resource_name', 128).notNullable().unique();
        tbl.string('resource_description', 128);
    })
    .createTable('tasks', tbl => {
        tbl.increments('task_id');
        tbl.string('task_description', 128).notNullable();
        tbl.string('task_notes', 128);
        tbl.boolean('task_completed').defaultTo(false);
        tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
    })
    .createTable('project_resource', tbl => {
        tbl.increments('project_resource_id');
        tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resource_id')
                .inTable('resources')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        tbl.string('res_pro_desc', 128);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
