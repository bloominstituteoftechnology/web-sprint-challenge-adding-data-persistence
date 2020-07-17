exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { id: 1, description: "test1" },
        { id: 2, description: "test2" },
        { id: 3, description: "test3" },
      ]);
    });
};
