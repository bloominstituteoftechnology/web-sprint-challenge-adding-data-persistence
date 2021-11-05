
exports.seed = async function(knex) {
    return await knex('resources').insert([
        {
            resource_name: "resource_1",
            resource_description: "1st resource",
        },
        {
            resource_name: "resource_2",
            resource_description: "2nd resource",
        },
        {
            resource_name: "resource_3",
            resource_description: "3rd resource",
        },
        {
            resource_name: "resource_4",
            resource_description: "4th resource",
        },
    ])
}
