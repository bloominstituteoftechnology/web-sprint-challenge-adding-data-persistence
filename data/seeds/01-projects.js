exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_id: 1,
          project_name: "Build PC",
          project_description: "I want to build a pc",
          project_completed: false,
        },
        {
          project_id: 2,
          project_name: "Build Website",
          project_description: "My next website",
          project_completed: false,
        },
        {
          project_id: 3,
          project_name: "Build robot",
          project_description: "Future robot build",
          project_completed: false,
        },
      ]);
    });
};
