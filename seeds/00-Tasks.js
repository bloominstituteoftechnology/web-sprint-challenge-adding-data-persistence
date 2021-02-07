
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        { 'task_description':'Do something'},
        { 'task_description':'Do something'},
        { 'task_description':'Do something'},
        { 'task_description':'Do something'},

      ]);
    });
};
