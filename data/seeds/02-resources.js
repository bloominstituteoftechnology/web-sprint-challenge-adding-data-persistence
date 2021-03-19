exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { resource_id: 1, resource_name: "React" },
        { resource_id: 2, resource_name: "Express" },
        { resource_id: 3, resource_name: "Graphics card" },
        { resource_id: 4, resource_name: "Power supply" },
        { resource_id: 5, resource_name: "Robot engineer" },
        { resource_id: 6, resource_name: "Robot Books" },
      ]);
    });
};
