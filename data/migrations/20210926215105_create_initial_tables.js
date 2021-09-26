
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table =>{
        table.increments('project_id') // PK
        table.string('project_name', 20).notNullable().unique()
        table.string('project_description', 250)
        table.boolean('project_completed').defaultTo(0) // 0 means false
    })
    .createTable('resources', table =>{
        table.increments('resources_id') // PK
        table.string('resource_name').notNullable().unique()
        table.string('resource_description')
    })
    .createTable('tasks', table=>{
        table.increments('task_id') // PK
        table.string('task_description').notNullable()
        table.string('task_notes')
        table.boolean('task_completed').defaultTo(0) // false
        table.integer('project_id') // FK
            .notNullable()
            .unsigned()
            .references('project_id')
            .inTable('projects')
            .onDelete('CASCADE')
    })
    .createTable('project_resources', table=>{
        table.increments('project_resources_id') // PK
        table.integer('task_id') // FK
            .unsigned()
            .notNullable()
            .references('task_id')
            .inTable('tasks')
        table.integer('resource_id') // FK
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
    })
};

exports.down = function(knex) {
  
};
