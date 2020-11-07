exports.up = function(knex, Promise) {
    return knex.schema
    .createTable("template", (tbl) => {
        tbl.increments();
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('template')
};