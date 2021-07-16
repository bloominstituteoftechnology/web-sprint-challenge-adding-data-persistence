const db = require('../../data/dbConfig');


function get() {
  return db('projects')
}

function insert(project) {
    return db('projects').insert(project)
}
// function getProjects() {
//   return db('projects');
// }

// async function insert(project_id) {
//   const projectRows = await db('projects as p')
//     .leftJoin('tasks as t', 'p.project_id','t.project_id')
//     .leftJoin('task_resource as tr', 'tr.task_id', 't.task_id')
//     .leftJoin('resources as r', 'r.resource_id', 'tr.resource_id')
//     .select(
//         'p.project_id',
//         'p.project_name',
//         't.task_id',
//         't.task_completed',
//         't.task_description',
//         'r.resource_id',
//         'r.resourc_name',
//     )
//     .orderBy('s.task_completed')
//     .where('r.project_id', project_id)

//     const projects = {
//        project_id: projectRows[0].project_id,
//        project_name: projectRows[0].project_name,
//        tasks: projectRows.reduce((acc,row) =>{
//            if(!row.resource_id){
//                //it's a new task with out resource
//                return acc.concat({
//                    task_id: row.task_id,
//                    task_completed: row.task_completed,
//                    task_description: row.task_description,
//                })
//            }
//            if(row.resource_id && !acc.find(step => step.task_id === row.task_id)) {
//               //it's a new task with resources
//               return acc.concat({
//                   task_id: row.task_id,
//                   task_completed: row.task_completed,
//                   task_description: row.task_description,
//                   resources: [
//                       {
//                           resource_id: row.resource_id,
//                           resourc_name: row.resourc_name,
              
//                       }
//                   ]
//               })
//            }
       
//        //it's a task we have encoutered before
//        const currentTask = acc.finf(task => task.task_id === row.task_id)
//        currentTask.resources.push({
//           resource_id: row.resource_id,
//           resourc_name: row.resourc_name,
//        })
//        return acc
//        }, [])
//     }
//     return projects
// }

module.exports = {
get,
insert
};

