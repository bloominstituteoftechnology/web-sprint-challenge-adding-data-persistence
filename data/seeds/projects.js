exports.seed = function(knex) {
    return knex('projects').truncate().then(function () {
        return knex('projects').insert([
            {id: 1, name: 'db4-project', description: "thursday's project", completed: true},
            {id: 2, name: 'sprint-challenge', description:'adding data persistence', completed: false}
        ]);
    });
};