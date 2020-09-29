exports.seed = function(knex) {
    return knex("resources").insert([
        {
            id: 1,
            task_name: "Step 3",
            task_desc: "Turn the mixer onto low speed, and add gradually flour, yogurt, salt, baking powder, and egg.",
            task_completed: false,
            project_id: 1
        },
        {
            id: 2,
            resource_name: "Step 1",
            resource_desc: "In a food processor, combine flour and salt; cover and pulse to blend. Add water, eggs and butter; cover and pulse until dough forms a ball, adding an additional 1 to 2 tablespoons of water or flour if needed. Let rest, covered, 15 to 30 minutes.",
            task_completed: false,
            project_id: 3
        },
    ]);
  };
  