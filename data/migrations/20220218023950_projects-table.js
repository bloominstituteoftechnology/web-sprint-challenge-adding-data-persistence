
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', table => {
        table.increments('project_id') // primary key
        table.string('project_name', 128).notNullable() 
        table.string('project_description', 128)
        table.integer('project_completed').defaultTo(0).unsigned()
    })
    .createTable('resources', table => {
        table.increments('resource_id') // primary key
        table.string('resource_name', 128).notNullable().unique()
        table.string('resource_description', 128)
    })
    .createTable('tasks', table => {
        table.increments('task_id') // primary key
        table.string('task_description', 128).notNullable()
        table.string('task_notes')
        table.integer('task_completed').defaultTo(0).unsigned()
        table.integer('project_id').notNullable().unsigned() 
            .references('project_id') // foreign key - tasks
            .inTable('projects') // original location of the foreign key  for projects
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
    .createTable('project_resources', table => {
        table.increments('project_resource_id') // primary key
        table.string('resource_assignment', 128)
        table.integer('project_id').notNullable().unsigned() // required and unique
            .references('project_id') // foreign key - projects table
            .inTable('projects') // original location of the foreign key  for projects
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
      table.integer('resource_id').notNullable().unsigned()
            .references('resource_id') // foreign key - resources table
            .inTable('resources') // original location of the foreign key for resources
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
