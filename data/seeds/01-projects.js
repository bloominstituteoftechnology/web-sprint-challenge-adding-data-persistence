exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("projects")
        .truncate()
        .then(function () {
            // Inserts seed entries
            return knex("projects").insert([
                {
                    id: 1,
                    project_name: "Project 1",
                    project_details:
                        "Start with a dream",
                    completed: false,
                },

                {
                    id: 2,
                    project_name: "Project 2",
                    project_details: "write out your plan",
                    completed: false,
                },

                {
                    id: 3,
                    project_name: "Project 3",
                    project_details: "Complete each task one at at a time",
                    Completed: false,
                },
            ]);
        });
};