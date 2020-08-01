exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects_resources")
    .truncate().del()
    .then(function() {
      // Inserts seed entries
      return knex("projects_resources").insert([
        { projects_id: 1, resources_id: 1 }
      ]);
    });
};