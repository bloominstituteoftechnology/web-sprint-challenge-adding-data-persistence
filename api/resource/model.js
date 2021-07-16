const db = require('../../data/dbConfig')

function getResources() {
    return db('resources')
}

async function addResource(resource) {

    return db('resources').insert(resource)
        .then(() => {
            return db('resources')
                .select('resources.resource_name')
                .first()
        })

    // const addedResource = await db('r').insert(post)
    //     .select('r.*')

    // const newResource = {
    //     resource_id: addedResource.resource_id,
    //     resource_name: addedResource.resource_name,
    //     resource_description: addedResource.resource_description,
    // }

    // return newResource

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