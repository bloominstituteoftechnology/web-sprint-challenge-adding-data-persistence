exports.up = async function (knex) {
    await knex.schema.createTable("project", tbl => {
        tbl.increments("id");
        tbl.text("name").notNull();
        tbl.text("description");
        tbl.bool("completed").defaultTo(false);
    });
    await knex.schema.createTable("resources", tbl => {
        tbl.increments("id");
        tbl.integer("project_id").references("id").inTable("project").notNull();
        tbl.text("name").notNull();
        tbl.text("description");
    });
    await knex.schema.createTable("task", tbl => {
        tbl.increments("id");
        tbl.integer("project_id").references("id").inTable("project").notNull();
        tbl.text("description").notNull();
        tbl.text("notes");
        tbl.bool("completed").defaultTo(false);
    });    
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("task");
    await knex.schema.dropTableIfExists("resources");
    await knex.schema.dropTableIfExists("project");
};