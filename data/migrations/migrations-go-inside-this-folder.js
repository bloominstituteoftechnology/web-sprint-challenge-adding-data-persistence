
// DO NOT CHANGE THIS FILE
exports.up = function(knex) {
    return knex.schema.createTable("actions", function(actions) {
        actions.increments();

        actions
            .integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
       
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("actions");
};
