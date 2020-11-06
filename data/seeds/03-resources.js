exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          resource_name: "running shoes",
          resource_description: "make you go fast",
        },
        {
          resource_name: "vsCode",
          resource_description: "to do the sprint...",
        },
        {
          resource_name: "dramen staff",
          resource_description: "to traverse the rings",
        },
      ]);
    });
};
