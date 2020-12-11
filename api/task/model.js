// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
    addTask(task) {
        return db('tasks')
          .insert(task, 'id')
          .then(() => this.getTasks(task.project_id));
      },
      getTasks(id) {
        return db('tasks as t')
          .join('projects as p', 'p.id', 't.project_id')
          .select(
            'p.project_name',
            'p.description',
            't.id',
            't.description',
            't.completed'
          )
          .where({ project_id: id });
      },
}