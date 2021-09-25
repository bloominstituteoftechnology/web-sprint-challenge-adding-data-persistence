
exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: "Catch Road Runner", project_description:"It's gonna work this time"},
        {project_name: "Go to Mars", project_description:"Go to, and help colonize Mars"},
        {project_name: "Try to take Over the World", project_description:"The same thing we do every night"}
      ])
    });
};
