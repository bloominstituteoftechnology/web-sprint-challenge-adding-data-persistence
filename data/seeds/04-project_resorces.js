exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('project_resources').del()
      .then(function () {
        // Inserts seed entries
        return knex('project_resources').insert([
          {project_resources_id: 1, project_id: "1", resource_id: "1" },
          {project_resources_id: 2, project_id: "2", resource_id: "2" },
          {project_resources_id: 3, project_id: "3", resource_id: "3" }
        ]);
      });
  };