
exports.up = async function(knex) {
 await knex.schema.createTable('Tasks', (tbl)=>{
     tbl.increments('task_id')
     tbl.text('task_description')
     tbl.text('task_notes')
     .defaultTo(null)
     tbl.bool('completed')
     .defaultTo(false)
     tbl
     .integer('project_id')
     .references('id')
     .inTable('projects')
     .onDelete('CASCADE')
     .onUpdate('CASCADE')
 })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('Tasks');
};
