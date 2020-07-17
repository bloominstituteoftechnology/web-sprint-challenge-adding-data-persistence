
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, description: "buy pattern", completed: true},
        {project_id: 2, description:"load dishwasher", notes:"run on heavy"},
        {project_id: 1, description: "cast on stitches"},
        {project_id: 2, description: "scrub stove"}
      ]);
    });
};
