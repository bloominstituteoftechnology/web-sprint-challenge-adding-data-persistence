// build your `Resource` model here
const db = require('../../data/dbConfig');

const getAll = async () => {
    try {
        const resources = await db('resource');
        return resources;
    } catch (error) {
        return {error: `could not get resources`}
    }
}

const getById = async id => {
    try {
        const resource = await db('resource').where({ resource_id: id }).first();
        return resource
    } catch (error) {
        return {error: `could not get resource`}
    }
}

const insert = async record => {
    try {
        const resourceId = await db('resource')
            .insert(record);
        return getById(resourceId[0]);
    } catch (err) {
        return {error: `could not post resource`}
    }
}


module.exports ={
    getAll,
    getById,
    insert
}