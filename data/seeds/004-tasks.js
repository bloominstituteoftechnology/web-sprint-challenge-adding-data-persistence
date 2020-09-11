
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1, 
          task_details: 'Burn CDs',
          task_notes: '', 
          task_completed: false, 
          project_id: 1
        },
        {
          id: 2, 
          task_details: 'Corner people on the street and sell them your album for $5',
          task_notes: '', 
          task_completed: false, 
          project_id: 1
        },
        {
          id: 3, 
          task_details: 'Take everything out of the closet',
          task_notes: '', 
          task_completed: false, 
          project_id: 2
        },
        {
          id: 4, 
          task_details: 'Leave the bedroom a disaster-zone for 1-3 weeks',
          task_notes: 'Make sure to pile crap on the bed too', 
          task_completed: false, 
          project_id: 2
        }, 
        {
          id: 5, 
          task_details: 'Put everything in labeled totes',
          task_notes: '', 
          task_completed: false, 
          project_id: 2
        }, 
        {
          id: 6, 
          task_details: 'Make a github repo',
          task_notes: 'Try not to roll your eyes', 
          task_completed: false, 
          project_id: 3
        }, 
        {
          id: 7, 
          task_details: 'Make a database',
          task_notes: 'Really make this painful. Overthink it. Delete it three times.', 
          task_completed: false, 
          project_id: 3
        }
      ]);
    });
};
