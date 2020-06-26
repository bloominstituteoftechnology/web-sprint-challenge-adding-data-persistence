const express = require("express")
const project = require("../models/project")

const router = express.Router()

router.get("/projects", async (req, res, next) => {
    try {
        const projects = await project.getProjects()
        res.json(projects)
    } catch(err) {
        next(err)
    }
})

// router.get("/recipes/:id/shoppinglist", async (req, res, next) => {
//     try {
//         const recipes = await Recipes.getShoppingList(req.params.id)
//         if (recipes.length) {
//             res.json(recipes)
//         } else {            
//             return res.status(404).json({
//                 message: "recipe not found",
//             })
//         }
        
//     } catch(err) {
//         next(err)
//     }
// })

// router.get("/recipes/:id/instructions", async (req, res, next) => {
//     try {
//         const recipes = await Recipes.getInstructions(req.params.id)
//         if (recipes.length) {
//             res.json(recipes)
//         } else {            
//             return res.status(404).json({
//                 message: "recipe not found",
//             })
//         }
//     } catch(err) {
//         next(err)
//     }
    
// })

module.exports = router