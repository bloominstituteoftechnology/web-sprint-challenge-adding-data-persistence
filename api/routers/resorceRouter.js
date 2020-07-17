const express = require('express');
const resourceRouter = express.Router();
// const Characters = require('./characterModel.js');

resourceRouter.get('/', (req, res) => {
    // Characters.find()
    // .then(response => {
    //     res.json(response)
    // })
    // .catch(err => res.json({error: err, message: err.message}))
    res.json('resources working')
})

// resourceRouter.post('/', (req, res) => {
//     res.json({
//         message: "Server is running on 'http:localhost:/api/' \t",
//     })
// })

module.exports = resourceRouter