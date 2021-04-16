exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('resources').del()
    .then(function () {
        // Inserts seed entries
        return knex('resources').insert([
            { resource_name: 'keyboard' },
            { resource_name: 'computer', resource_description: 'Windows PC' }
        ]);
    });
};