const db = require("../data/config")

function getProjects() {
    return db("project")
}

// function getShoppingList(id){
//     return db("recipes as r")
//         .where("r.id", id)
//         .join("recipe_ingredients as ri", "ri.recipe_id", "r.id")
//         .join("ingredients as i", "i.id", "ri.ingredient_id")
//         .select("r.name as Recipe Name", "ri.quantity", "i.name as Ingredient Name")
// }

// function getInstructions(id) {
//     return db("recipes as r")
//         .where("r.id", id)
//         .join("steps as s", "s.recipe_id", "r.id")
//         .select("r.name", "s.step_number", "s.description")
//         .orderBy("s.step_number")
// }

module.exports = {
    getProjects,
}