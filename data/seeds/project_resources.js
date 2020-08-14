exports.seed = function(knex) {
    return knex('project_resources').truncate().then(function () {
        return knex('project_resources').insert([
            {id: 1, project_id: 1, resource_id: 1 },
            {id: 2, project_id: 1, resource_id: 2 },
            {id: 3, project_id: 1, resource_id: 3 },
            {id: 4, project_id: 1, resource_id: 4 },
            {id: 5, project_id: 2, resource_id: 5 },
            {id: 6, project_id: 2, resource_id: 4 },
            {id: 7, project_id: 2, resource_id: 3 },
            {id: 8, project_id: 1, resource_id: 2 },
            {id: 9, project_id: 2, resource_id: 1 },
        ]);
    });
};
