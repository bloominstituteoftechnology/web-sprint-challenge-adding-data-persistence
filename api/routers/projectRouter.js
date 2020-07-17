const express = require('express');
const projectRouter = express.Router();
// const Characters = require('./characterModel.js');

projectRouter.get('/', (req, res) => {
    // Characters.find()
    // .then(response => {
    //     res.json(response)
    // })
    // .catch(err => res.json({error: err, message: err.message}))
    res.json('projects working')
})

// projectRouter.post('/', (req, res) => {
//     res.json({
//         message: "Server is running on 'http:localhost:/api/' \t",
//     })
// })

module.exports = projectRouter