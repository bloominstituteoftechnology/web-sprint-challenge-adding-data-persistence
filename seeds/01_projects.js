exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          completed: 1,
          name: "Project Test Name 1",
          description: "Project Test Description 1",
        },
        {
          completed: 0,
          name: "Project Test Name 2",
          description: "Project Test Description 2",
        },
        {
          completed: 1,
          name: "Project Test Name 3",
          description: "Project Test Description 3",
        },
      ]);
    });
};
