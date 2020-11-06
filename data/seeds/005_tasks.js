
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, description: 'get paper', notes:'if you have none, use your hand', completed: true, project_id: '1'},
        {id: 1, description: 'get crayon', notes:'check front pocket', completed: true, project_id: '1'},
        {id: 1, description: 'color it blue!', notes:'seriously, I have never seen a blue duck before!', completed: true, project_id: '1'},
        {id: 1, description: 'get jean jacket', notes:'who would not pass a grown man in a jean jacket', completed: true, project_id: '2'},
        {id: 1, description: 'add cool patches', notes:'gotta be hardcore', completed: true, project_id: '2'},
        {id: 1, description: 'pose on trans am', notes:'chicks dig a trans am', completed: true, project_id: '3'},
      ])
    })
}
