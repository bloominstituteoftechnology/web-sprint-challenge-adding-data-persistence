
exports.up = function(knex) {

    return knex.schema
    
    .createTable('projects', tbl =>{
        tbl.increments('id')
        tbl.string('name', 255).notNullable()
        tbl.string('discription', 255)
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('tasks', tbl =>{
        tbl.increments('id')
        tbl.string('name', 255).notNullable()
        tbl.string('discription', 255)
        tbl.boolean('completed').notNullable().defaultTo(false);
        //foreign keys
        tbl
        .integer('projects_id')
        .unsigned()
        .references('projects.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

    })
    .createTable('resources', tbl =>{
        tbl.increments()
        tbl.string('name', 255).notNullable()
        tbl.string('discription')
    })
    .createTable('tasks_resources', tbl =>{
        tbl.increments()
        //foreign keys
        tbl
        .integer('tasks_id')
        .unsigned()
        .references('tasks.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        tbl
        .integer('resources_id')
        .unsigned()
        .references('resources.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        
        
        tbl.string('name', 255).notNullable()
    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableifExists('tasks_resources')
    .dropTableifExists('resources')
    .dropTableifExists('tasks')
    .dropTableifExists('project')
  
};
