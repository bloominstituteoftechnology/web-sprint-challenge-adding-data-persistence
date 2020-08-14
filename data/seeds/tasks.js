exports.seed = function(knex) {
    return knex('tasks').truncate().then(function () {
        return knex('tasks').insert([
            {id: 1, description: 'fork project from gh', notes:'fork project and create your own branch', completed: true, project_id: '1'},
            {id: 2, description: 'complete mvp', notes:'create a database model using knex', completed: true, project_id: '1'},
            {id: 3, description: 'complete stretch', notes:'write the endpoints to test out your model', completed: true, project_id: '1'},
            {id: 4, description: 'attempt mvp', notes:'fork project from gh and attempt mvp goals',completed: false, project_id: '2'},
            {id: 5, description: 'seed database', notes:'create fake data for your database', completed: false, project_id: '2'}
        ]);
    });
};
