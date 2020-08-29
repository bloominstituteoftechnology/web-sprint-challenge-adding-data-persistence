
exports.up = function(knex, Promise) {
    return knex.schema.createTable('resource', tbl => {
        // create primary key called id
        tbl.increments();
        // name, description, completed
        tbl.text('name').notNullable().unique();
        tbl.text('description');
    })
};

exports.down = function(knex) {
    // drop the whole table
    return knex.schema.dropTableIfExists('resource');
};
