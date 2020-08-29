
exports.up = function(knex, Promise) {
    return knex.schema.createTable('task', tbl => {
        // create primary key called id
        tbl.increments();
        // name, description, completed
        tbl.text('description').notNullable();
        tbl.text('notes');
        tbl.boolean('completed').notNullable().defaultTo(0);
        tbl.integer('project_id');
    })
};

exports.down = function(knex) {
    // drop the whole table
    return knex.schema.dropTableIfExists('task');
};
