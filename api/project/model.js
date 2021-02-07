// build your `Project` model here
const db = '../../dev.db3';



//GET projects
async function get(){
    return await db('Projects');
}
//GET projectsByID

async function getProjectsByID(id){
    await db.select(id).from('Projects');
}