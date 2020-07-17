
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {project_id: 1, name: "knitting needles"},
        {project_id: 2, name: "soap", description: "dish soap"},
        {project_id: 1, name: "yarn", description: "bulky weight, blue"}
      ]);
    });
};
