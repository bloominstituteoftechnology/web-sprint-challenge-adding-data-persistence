/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', table => {
        table.increments('project_id')
        table.string('project_name', 200).notNullable()
        table.string('project_description', 500)
        table.boolean('project_completed').defaultTo(false)
    })
    .createTable('resources', table => {
        table.increments('resource_id')
        table.string('resource_name', 200).notNullable().unique()
        table.string('resource_description', 500)
    })
    .createTable('tasks', table => {
        table.increments('task_id')
        table.string('task_description', 500).notNullable()
        table.string('task_notes', 500)
        table.boolean('task_completed').defaultTo(false)
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('CASCADE')

    })
    .createTable('project_resources', table => {
        table.increments('project_resource_id')
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('restrict')
        table.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
            .onDelete('CASCADE')
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
