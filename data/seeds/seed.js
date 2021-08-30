const projects = [
      {
        project_name: 'Watch Youtube', 
        project_description: 'Waste away watching rocket league', project_completed: false
      },
      {
        project_name: 'Play Rocket League', 
        project_description: 'Reach SSL', project_completed: true
      },
      {
        project_name: 'Go To Work', 
        project_description: 'Get money 4 daughter', project_completed: false
      }
    ]
    
    const resources = [
      {
        resource_name: 'Youtube',
        resource_description: 'youtube.com'
      },
      {
        resource_name: 'Epic Games Launcher',
        resource_description: 'This is how you get into rocket league without steam'
      },
      {
        resource_name: 'Badge',
        resource_description: 'Scan badge at the door to get in'
      }
    ]
    
    const tasks = [
      {
        task_description: 'Air Roll Practice',
        task_notes: 'press lb',
        task_completed: 0,
        project_id: 1
      },
      {
        task_description: 'speed flips',
        task_notes: 'front flip into air roll left and cancel air roll at the same time',
        task_completed: 0,
        project_id: 1
      },
      {
        task_description: 'Youtube',
        task_notes: 'Find a good video to watch',
        task_completed: 0,
        project_id: 2
      },
      {
        task_description: 'Work',
        task_notes: 'Clock in and go fast',
        task_completed: 0,
        project_id: 3
      }
    ]
    
    const resource_assignments = [
      {
        resource_id: 1,
        project_id: 1
      },
      {
        resource_id: 2,
        project_id: 2
      },
      {
        resource_id: 3,
        project_id: 3
      }
    ]
    
    exports.seed = async function(knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('resource_assignments').insert(resource_assignments)
    };