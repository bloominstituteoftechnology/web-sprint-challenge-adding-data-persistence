
exports.seed = function(knex) {
    return knex('project').insert([
        {
            name: 'Website1',
            description: 'adsfasdfasdfadfa',
            completed: false,
        },
        {
            name: 'Website 2',
            description: 'adsfasdfasdfadfa',
            completed: false,
        },
        {
            name: 'Website 3',
            description: 'build it',
            completed: false,
        }

    ]);
};
