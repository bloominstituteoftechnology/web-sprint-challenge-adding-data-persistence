exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([{
          id: 1,
          project_name: "Get MVP",
          project_description: "get mvp",
          completed: false
        },
        {
          id: 2,
          project_name: "Get better at Node",
          project_description: "Steps to get better at Node",
          completed: false
        },
        {
          id: 3,
          project_name: "Eat dinner",
          project_description: "we need to gain weight",
          completed: false
        }
      ]);
    });
};