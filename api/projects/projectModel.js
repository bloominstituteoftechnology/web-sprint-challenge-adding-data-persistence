const db = require('../../data/dbConfig');

module.exports = {
    addProject,
    retrieveProjects,
    retrieveProjectById,
    retrieveProjectTasks
};

retrieveProjects = () => {
    return db('projects').select('*');
};

retrieveProjectById => (id) => {
    return db('projects').where({id}).first();
};

addProject = async (project) => {
    return db('projects').insert(project).then( idList => {
        return getProjectById(idList);
    });
};

retrieveProjectTasks = (id) => {
    return db('tasks').select('id', 'description', 'notes', 'completed').where({ project_id: id });
};