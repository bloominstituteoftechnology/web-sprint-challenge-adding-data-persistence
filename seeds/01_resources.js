exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          name: "Resource Test Name 1",
          description: "Resource Test Description 1",
        },
        {
          name: "Resource Test Name 2",
          description: "Resource Test Description 2",
        },
        {
          name: "Resource Test Name 3",
          description: "Resource Test Description 3",
        },
        {
          name: "Resource Test Name 4",
          description: "Resource Test Description 4",
        },
      ]);
    });
};
