
exports.seed = function(knex) {
    return knex('task').insert([
        {
            project_id:1,
            desc: 'home page',
            notes: 'asdfasdfasdfasdf',
            completed:false,

        },
        {
            project_id:1,
            desc: 'back page',
            notes: 'asasdfasdf',
            completed:false,

        },
        {
            project_id:1,
            desc: 'backend',
            notes: 'asdfasdfasdfasdf',
            completed:false,

        },
        {
            project_id:2,
            desc: 'something',
            notes: 'asdfasdfasdfasdf',
            completed:false,

        },
        {
            project_id:3,
            desc: 'home page static',
            notes: 'asdfasdfasdfasdf',
            completed:false,

        },

    ]);
};
