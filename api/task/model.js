// build your `Task` model here
const db = require('../../data/dbConfig')

async function get() {
    const rows = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select('t.task_id',
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description');
    const result = rows.map(row => {
        return {
            ...row,
            task_completed: row.task_completed ? true : false
        }
    })
    return (result)
}

async function create(task) {
    const [newID] = await db('tasks').insert(task)
    const newPost = await db('tasks').where('task_id', newID)
    const result = newPost.map(row => {
        return {
            ...row,
            task_completed: row.task_completed ? true : false
        }
    })
    return result[0]
}

module.exports = {
    get,
    create

}
