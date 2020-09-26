exports.seed = function(knex) {
    return knex("resources").insert([
        {
            id: 1,
            resource_name: "Potato",
            resource_desc: "The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum."
        },
        {
            id: 2,
            resource_name: "Bowl",
            resource_desc: "A bowl is a round, deep dish or basin used for food or liquid."
        },
    ]);
  };
  