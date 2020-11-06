
exports.up = function(knex) {
    return knex.schema
    .createTable('project', tbl =>{
        tbl.increments('project_id')
        tbl.string('project_name', 128).notNullable()
        tbl.string('description')
        tbl.boolean('completed').defaultTo(0)
    })
    .createTable('resourse', tbl =>{
        tbl.increments()
        tbl.string('resourse_name', 128).notNullable()
        tbl.string('description', 128)
    })
    .createTable('project-resourse', tbl =>{
        tbl.increments()
        tbl.integer('resourse_id')
            .unsigned()
            .notNullable()
            .references('resourse_id')
            .inTable('resourse')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('project')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('task', tbl => {
        tbl.increments()
        tbl.integer('sequence')
            .unsigned()
        tbl.string("instruction")
        tbl.boolean('compleated').defaultTo(0)
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('project')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('task')
  .dropTableIfExists('project-resourse')
  .dropTableIfExists('resourse')
  .dropTableIfExists('project')
};
