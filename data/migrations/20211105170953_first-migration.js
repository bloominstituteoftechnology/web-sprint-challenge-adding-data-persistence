
exports.up = async function(knex) {
    await knex.schema
        .createTable('projects', (table) => {
            table.increments('project_id')
            table.string('project_name', 128)
                .notNullable()
            table.string('project_description', 255)
            table.boolean('project_completed')
                .defaultTo(false)
        })
        .createTable('resources', (table) => {
            table.increments('resource_id')
            table.string('resource_name', 128)
                .notNullable()
                .unique()
            table.string('resource_description', 255)
        })
        .createTable('tasks', (table) => {
            table.increments('task_id')
            table.string('task_description', 255)
                .notNullable()
            table.string('task_notes', 255)
            table.boolean('task_completed')
                .defaultTo(false)
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
        .createTable('project_resources', (table) => {
            table.increments('project_resource_id')
            table.integer('project_id')
                .notNullable()
                .unsigned()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            table.integer('resource_id')
                .notNullable()
                .unsigned()
                .references('resource_id')
                .inTable('resources')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
}

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
}
