const db = require('../../data/dbConfig')

async function getResources() {
    // select * from resources
    // const resourceResults = await db('resources as r')
    //     .select('r.resource_id', 'r.resource_name', 'r.resource_description')

    // const resources = {
    //     resource_id: resourceResults.resource_id,
    //     resource_name: resourceResults.resource_name,
    //     resource_description: resourceResults.resource_description,
    // }

    // return resources
    return db('resources')
}

async function addResource(post) {
    const addedResource = await db('r').insert(post)
        .select('r.*')

    const newResource = {
        resource_id: addedResource.resource_id,
        resource_name: addedResource.resource_name,
        resource_description: addedResource.resource_description,
    }

    return newResource

    // return db('resources as r').insert({
    //     post
    // })
    //     .then(() => {
    //         const addedResource = await db('r')
    //             .select('r.*')
            
    //             const newResource = {
    //                 resource_id: newResource.resource_id,
    //                 resource_name: newResource.resource_name,
    //                 resource_description: newResource.resource_description,
    //             }

    //             return newResource
    //     })
}

module.exports = {
    getResources,
    addResource,
};