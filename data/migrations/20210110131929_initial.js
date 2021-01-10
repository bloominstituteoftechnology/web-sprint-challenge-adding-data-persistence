
exports.up = async function(knex) {
    await knex.schema.createTable('project', (table) => {
        table.increments('id')
        table.text('name').notNull()
        table.text('description')
        table.boolean('completed').default(0)
    })
    await knex.schema.createTable('resource', (table) => {
        table.increments('id')
        table.text('name').notNull()
        table.text('description')
    })
    await knex.schema.createTable('task', (table) => {
        table.increments('id')
        table.text('description').notNull()
        table.text('notes')
        table.boolean('completed').default(0)
        table.integer('pro_id')
        .references('id')
        .inTable('project')
        .onDelete('SET NULL')
        .onUpdate('CASCADE')
    })
    await knex.schema.createTable('pro_res_task',(table) => {
        table.integer('pro_id')
        .references('id')
        .inTable('project')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNull()
        table.integer('res_id')
        .references('id')
        .inTable('resource')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNull()
        table.integer('task_id')
        .references('id')
        .inTable('task')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNull()
        table.primary(['pro_id','res_id','task_id'])
    })

    
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('pro_res_task')
    await knex.schema.dropTableIfExists('task')
    await knex.schema.dropTableIfExists('resource')
  await knex.schema.dropTableIfExists('project')
};
