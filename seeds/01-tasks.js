exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        { id: 1, name: "react", description: "unit 3" },
        { id: 2, name: "node", description: "unit 4" },
        { id: 3, name: "java", description: "unit 4" },
      ]);
    });
};
