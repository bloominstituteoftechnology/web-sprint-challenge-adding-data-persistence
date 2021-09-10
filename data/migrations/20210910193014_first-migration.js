
exports.up = async function(knex) {
  await knex.scheme
    .createTable('projects', table =>{
        table.increments('project_id')
        table.string('project_name', 128).notNullable().unique()
        table.string('project_description')
        table.boolean('project_completed').notNullable().defaultTo(0)
    })
    .createTable('resources', table =>{
        table.increments('resource_id')
        table.string('resource_name').notNullable().unique()
        table.string('resource_description')
    })
    .createTable('task', table =>{
        table.increments('task_id')
        table.string('task_description').notNullable()
        table.string('task_notes')
        table.boolean('task_completed').notNullable().defaultTo(0)
        table.integer('project_id')
             .unsigned()
             .notNullable()
             .references('project_id')
             .inTable('projects')
             .onDelete('RESTRICT')
             .onUpdate('RESTRICT')
    })
    .createTable('project_resources', table =>{
        table.increments('project_resource_id')
        table.integer('project_id')
             .unsigned()
             .notNullable()
             .references('project_id')
             .inTable('projects')
             .onDelete('RESTRICT')
             .onUpdate('RESTRICT')
        table.integer('resource_id')
             .unsigned()
             .notNullable()
             .references('resource_id')
             .inTable('resources')
             .onDelete('RESTRICT')
             .onUpdate('RESTRICT')
    })
};

exports.down = async function(knex) {
  await knex.scheme
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
