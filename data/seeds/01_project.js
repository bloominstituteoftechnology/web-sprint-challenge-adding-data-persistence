exports.seed = async function (knex) {
    await knex("project").insert([
        {
            name: "Get a new job",
            description: "Need a new job to buy a new car",
            completed: true
        },
        {
            name: "Buy a new car",
            description: "Need a car to get a around after I have a car",
            completed: false
        },
        {
            name: "Get Married",
            description: "Who wants to be alone...",
            completed: false
        }
    ]);
}