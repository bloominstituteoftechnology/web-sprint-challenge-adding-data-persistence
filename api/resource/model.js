// build your `Resource` model here
const db=require('../../data/dbConfig')

module.exports={
    getResources,
    addResource
}

function getResources(){
    return db('resources')
}

function addResource(resource){
    return db('resources').insert(resource)
    .then (([resource_id])=>db('resources').where('resource_id', resource_id).first())
}