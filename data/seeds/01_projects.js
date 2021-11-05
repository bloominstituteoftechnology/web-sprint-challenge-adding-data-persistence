
exports.seed = async function(knex) {
    return await knex('projects').insert([
        {
            project_name: "project_1",
            project_description: "1st project",
            project_completed: false,
        },
        {
            project_name: "project_2",
            project_description: "2nd project",
            project_completed: true,
        },
        {
            project_name: "project_3",
            project_description: "3rd project",
            project_completed: false,
        },
    ])
}
