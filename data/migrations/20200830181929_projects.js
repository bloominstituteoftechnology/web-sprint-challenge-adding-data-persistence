
exports.up = async function(knex) {
    await knex.schema.createTable('projects', table => {
        table.increments('id')
        table.text('name', 128).unique().notNull()
        table.text('description', 128)
        table.integer('completed').defaultTo(0)
    })

    await knex.schema.createTable('tasks', table => {
        table.increments('id')
        table.text('description', 128).notNull()
        table.text('notes', 255)
        table.integer('project_id')
            .references('id')
            .inTable('projects')
            .notNull()
        table.integer('completed').defaultTo(0)
    })

    await knex.schema.createTable('resources', table => {
        table.increments('id')
        table.text('name', 128).unique().notNull()
        table.text('description', 128)
    })

    await knex.schema.createTable('project_resources', table => {
        table.integer('project_id')
            .references('id')
            .inTable('projects')
            .notNull()
        table.integer('resource_id')
            .references('id')
            .inTable('resources')
            .notNull()
        table.integer('quantity')
            .notNull()
        table.primary(['project_id', 'resource_id'])
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('project_resources')
    await knex.schema.dropTableIfExists('resources')
    await knex.schema.dropTableIfExists('tasks')
    await knex.schema.dropTableIfExists('projects')
};

