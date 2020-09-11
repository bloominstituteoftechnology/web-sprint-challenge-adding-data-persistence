
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {
          id: 1,
          name: 'world peace',
          task_id: 1,
        },
        {
          id: 2,
          name: 'end famine',
          task_id: 2
        },
        {
          id: 3,
          name: 'explore the stars',
          task_id: 3
        }
      ]);
    });
};
