const express = require("express")

const Resources = require('./resources-model')

const router = express.Router()

//get a list of projects
router.get('/', (req, res) => (
    Resources.find()
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        }) 
))


// //get projects by id
// router.get('/:id', (req, res) => {
//     const {id} = req.params;

//     Projects.findById(id)
//         .then(project => {
//             if (project) {
//             res.status(200).json(project);
//             } else {
//             res.status(404).json({ message: 'Could not find project with given id.' })
//             }
//         })
//         .catch(err => {
//             res.status(500).json({ message: 'Failed to get project' });
//         });
//     })

    //post a project
    router.post('/', (req, res) => {
        const newResource = req.body;
      
        Resources.add(newResource)
            .then(resource => {
                res.status(201).json(resource)
            })
            .catch (err => {
                res.status(500).json({ message: 'Failed to create new resource' });
            });
      });
    module.exports = router