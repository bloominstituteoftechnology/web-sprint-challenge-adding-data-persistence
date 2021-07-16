
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name', 128).notNullable().unique()
        tbl.string('project_description', 256)
        tbl.integer('project_completed',16).notNullable().defaultTo(0)
        //tbl.boolean('project_completed',16).notNullable().defaultTo(false)
    })
    .createTable('resources', tbl => {
        tbl.increments('resource_id')
        tbl.string('resource_name', 128).notNullable().unique()
    })
    .createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.string('task_description', 128).notNullable().unique()
        tbl.integer('task_order').notNullable()
                tbl.integer('project_id')
                  .unsigned()
                  .notNullable()
                  .references('project_id')
                  .inTable('projects')
                  .onDelete('RESTRICT')
                  .onUpdate('RESTRICT')
    })
    .createTable('project_resources', tbl => {
        tbl.increments('project_resources_id')
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('project_id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('RESTRICT')
          tbl.integer('resource_id')
          .unsigned()
          .notNullable()
          .references('resource_id')
          .inTable('resource')
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

