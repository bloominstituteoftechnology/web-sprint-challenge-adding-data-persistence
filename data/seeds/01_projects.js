
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_name: "Build Dome",
          description: "In this project there will be a dome built.",
          completed_status: 0
        },
        {
          project_name: "Bake a Pie",
          description: "In this project we will bake a pie.",
          completed_status: 0
        }
      ]);
    });
};
