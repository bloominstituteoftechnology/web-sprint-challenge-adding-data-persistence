
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
        })
        .createTable('project_resources', (table) => {
            table.increments('project_resource_id')
        })
}

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
}
