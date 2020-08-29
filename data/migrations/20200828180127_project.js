
exports.up = function(knex, Promise) {
    return knex.schema.createTable('project', tbl => {
        // create primary key called id
        tbl.increments();
        // name, description, completed
        tbl.text('name').notNullable();
        tbl.text('description');
        tbl.boolean('completed').notNullable().defaultTo(0);
    })
};

exports.down = function(knex) {
    // drop the whole table
    return knex.schema.dropTableIfExists('project');
};
