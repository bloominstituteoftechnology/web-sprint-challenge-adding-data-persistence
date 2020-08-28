import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("projects", tableBuilder => {
        tableBuilder.increments("id");
        tableBuilder.text("name").notNullable();
        tableBuilder.text("description");
        tableBuilder.boolean("completed").notNullable().defaultTo(false);
    });

    await knex.schema.createTable("tasks", tableBuilder => {
        tableBuilder.increments("id");
        tableBuilder.integer("projectId").notNullable().references("id").inTable("projects").onDelete("CASCADE").onUpdate("CASCADE");
        tableBuilder.text("description").notNullable();
        tableBuilder.boolean("completed").notNullable().defaultTo(false);
        tableBuilder.text("notes");
    });

    await knex.schema.createTable("resources", tableBuilder => {
        tableBuilder.increments("id");
        tableBuilder.text("name").notNullable().unique();//unique to ensure that we don't have duplicate resources in the table
        tableBuilder.text("description");
    });

    await knex.schema.createTable("project_resources", tableBuilder => {
        tableBuilder.integer("projectId").notNullable().references("id").inTable("projects").onDelete("CASCADE").onUpdate("CASCADE");
        tableBuilder.integer("resourceId").notNullable().references("id").inTable("resources").onDelete("CASCADE").onUpdate("CASCADE");

        tableBuilder.primary(["projectId", "resourceId"]);
    });

    await knex.schema.createTable("project_tasks", tableBuilder => {
        tableBuilder.integer("projectId").notNullable().references("id").inTable("projects").onDelete("CASCADE").onUpdate("CASCADE");
        tableBuilder.integer("taskId").notNullable().references("id").inTable("tasks").onDelete("CASCADE").onUpdate("CASCADE");

        tableBuilder.primary(["projectId", "taskId"]);
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("project_tasks");
    await knex.schema.dropTableIfExists("project_resources");
    await knex.schema.dropTableIfExists("resources");
    await knex.schema.dropTableIfExists("tasks");
    await knex.schema.dropTableIfExists("projects");
}

