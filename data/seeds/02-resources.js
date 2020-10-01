const { orHaving } = require("../db-config");

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("resources")
        .truncate()
        .then(function () {
            // Inserts seed entries
            return knex("resources").insert([
                {
                    id: 1,
                    resource_name: "Daily planning",
                    resource_details: "Set gaols to conquer the day",
                },

                {
                    id: 2,
                    resource_name: "wake up with a goal",
                    resource_details:
                        "the list is crucial to accomplish many things",
                },

                {
                    id: 3,
                    resource_name: "work each action item",
                    resource_details: "fullfill each task at 100%",
                },

                {
                    id: 4,
                    resource_name: "move onto the next",
                    resource_details:
                        "make sure you are satisfied with thats goal task",
                },

                {
                    id: 5,
                    resource_name: "when done, review action item list",
                    resource_details: "be sure to revisit each task if time allows",
                },

                {
                    id: 6,
                    resource_name: "Cross out the accomplished task",
                    resource_details:
                        "this is gonna make you feel amazing..I promise",
                },
            ]);
        });
};