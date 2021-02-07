// build your `Resource` model here
const db = require('../../data/dev.db3');


module.exports = {
    get, 
    getByID
}

//GET - get resources

async function get(){
   return await db('Resources');
}

//GET - resource by ID 

async function getByID (id){
    return await db.select('*').from('Resources').where({"resource_id":id})
    
}
