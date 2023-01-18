// build your `Resource` model here
const db = require('../../data/dbConfig')


async function get(){
    const rows = await db('resources');
    return(rows)
}

async function create(resource){
    const [newID] = await db('resources').insert(resource)
    const newPost = await db('resources').where('resource_id', newID)
    return newPost[0]
}

async function getByName(resource){
    const row = await db('resources')
        .where('resource_name',resource)
    return(row)
}

module.exports = {
    get,
    create,
    getByName

}
