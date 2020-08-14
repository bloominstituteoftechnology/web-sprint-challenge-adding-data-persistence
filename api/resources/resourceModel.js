const db = require('../../data/dbConfig')

module.exports = {
    addResource,
    retrieveResources,
    retrieveResourceById
};

retrieveResources = () => {
    return db('resources').select('*');
};

retrieveResourceById = (id) => {
    return db('resources').where({ id }).first();
};

addResource = async (resource) => {
    return db('resources').insert(resource).then( idList => {
        return getResourceById(idList)
    });    
};