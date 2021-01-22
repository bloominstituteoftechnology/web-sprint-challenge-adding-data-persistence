
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl=>{
        tbl.increments('project_id')
        tbl.string('project_name',120).notNullable()
        tbl.string('project_description',240)
        tbl.boolean('project_completed').defaultTo(false)
    })
    .createTable('resources', tbl=>{
        tbl.increments('resource_id')
        tbl.string('resource_name').notNullable().unique()
        tbl.string('resource_description',240)
    })
    .createTable('tasks', tbl=>{
        tbl.increments('task_id')
        tbl.string('task_description',240).notNullable()
        tbl.string('task_notes',240)
        tbl.boolean('task_completed').defaultTo(false)
        tbl.integer('project_id').unsigned().notNullable().references('project_id').inTable('projects').onDelete('CASCADE')
    })
    .createTable('project_resources', tbl=>{
    tbl.increments('project_resource_id')
    tbl.integer('resource_id').unsigned().notNullable().references('resource_id').inTable('resources').onDelete('CASCADE')
    tbl.integer('project_id').unsigned().notNullable().references('project_id').inTable('projects').onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
