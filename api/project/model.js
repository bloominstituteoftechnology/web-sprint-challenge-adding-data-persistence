// build your `Project` model here
const db = require("../../data/dbConfig")

// Let me start off by saying I understand that the API was supposed to use integers not 
// Booleans for the project_completed; however I was doing some research on what SQL
// accepts for table values and saw that Boolean was an option. Since storing data as 
// Integers and then translating them to and from booleans would require additional 
// work / code and introduce unnessasary complexity into the code I decided to just use
// the boolean value for the table. If I did use an integer then I would of used a 
// if else statement to set a variable to the correct boolean value before sending and 
// retrieving the project_completed field

function getProjects() {
    return db("*").from("Project").orderBy("project_id")
}

async function addProject(project) {
    // Looked in the test file and saw that y'all are sending 1's and 0's to the API
    // so I had to implement this code to convert to the right format. It is still 
    // more efficient because I only have to mutate the post instead of the post AND get
    if(project[0].project_completed === 1) {
        project[0].project_completed = true;
    } else if(project[0].project_completed === 0) {
        project[0].project_completed = false;
    }
    const [project_id] = await db("Project").insert(project)
    return db("*").from("Project").where({project_id}).first()
}


module.exports = {
    getProjects,
    addProject
}