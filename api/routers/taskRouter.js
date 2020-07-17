const express = require('express');
const taskRouter = express.Router();
// const Characters = require('./characterModel.js');

taskRouter.get('/', (req, res) => {
    // Characters.find()
    // .then(response => {
    //     res.json(response)
    // })
    // .catch(err => res.json({error: err, message: err.message}))
    res.json('tasks working')
})

// taskRouter.post('/', (req, res) => {
//     res.json({
//         message: "Server is running on 'http:localhost:/api/' \t",
//     })
// })

module.exports = taskRouter