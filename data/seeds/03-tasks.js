exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('tasks').del()
        .then(function () {
            // Inserts seed entries
            return knex('tasks').insert([
                {
                    id: 1,
                    task_details: 'Get a pen and paper',
                    task_notes: '',
                    task_completed: false,
                    project_id: 1
                },
                {
                    id: 2,
                    task_details: 'Write a list of things to do',
                    task_notes: '',
                    task_completed: false,
                    project_id: 1
                },
                {
                    id: 3,
                    task_details: "do them one at a time",
                    task_notes: '',
                    task_completed: false,
                    project_id: 2
                },
                {
                    id: 4,
                    task_details: 'cross out goals',
                    task_notes: '',
                    task_completed: false,
                    project_id: 2
                },
                {
                    id: 5,
                    task_details: 'see the trail of victories',
                    task_notes: '',
                    task_completed: false,
                    project_id: 3
                },
                {
                    id: 6,
                    task_details: 'feel the self esteem rise',
                    task_notes: '',
                    task_completed: false,
                    project_id: 3
                }
            ]);
        });
};