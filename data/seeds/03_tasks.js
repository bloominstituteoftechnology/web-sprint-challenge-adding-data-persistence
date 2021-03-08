exports.seed = async function (knex) {
    await knex("task").insert([
        {
            project_id: 1,
            description: "join lambda to learn new skills for a job",
            notes: "",
            completed: true
        },
        {
            project_id: 1,
            description: "finish lambda to get a job",
            notes: "apply for skill based jobs after",
            completed: true
        },
        {
            project_id: 2,
            description: "need a car I like to pay for",
            notes: "mustang",
            completed: true
        },
        {
            project_id: 2,
            description: "save money to buy the car I want",
            notes: "",
            completed: false
        },
        {
            project_id: 3,
            description: "gotta date to get a girl",
            notes: "",
            completed: false
        },
        {
            project_id: 3,
            description: "if you don't ask you cant get married",
            notes: "you can do this!",
            completed: false
        }
    ]);
}