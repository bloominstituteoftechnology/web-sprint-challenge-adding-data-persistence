
exports.up = async function(knex) {
 await knex.schema.createTable('Tasks', (tbl)=>{
     tbl.increments('task_id')
     tbl.text('task_description')
     tbl.text('task_notes')
     tbl.bool('completed')
     .defaultTo(false)

 }) 
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('Tasks');
};
