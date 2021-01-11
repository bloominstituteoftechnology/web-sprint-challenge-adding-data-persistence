
exports.up = function(knex) {
    return knex.schema.createTable("project_resources", (table) => {
        table.integer("project_id").references("project_id").inTable("projects");
        table.integer("resource_id").references("resource_id").inTable("resources");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("project_resources");
};
