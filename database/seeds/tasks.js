exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {notes: 'task notes 1', description: 'rowValue1', complete: 1},
        {notes: 'task name 2', description: 'rowValue2', complete: 1},
        {notes: 'task name 3', description: 'rowValue3', complete: 1 }
      ]);
    });
};
