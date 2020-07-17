exports.seed = function(knex) {
  return knex('tasks')
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {notes: 'task name 4', description: 'rowValue1'},
        {notes: 'task name 5', description: 'rowValue2'},
        {notes: 'task name 6', description: 'rowValue3'}
      ]);
    });
};