
exports.seed = function(knex) {
    return knex('resource').insert([
        {
            name: 'Computer',
            description: 'Mac 549',
        },
        {
            name: 'Calculator',
            description: 'm95',
        },
        {
            name: 'Desk',
            description: 'wood',
        }

    ]);
};
