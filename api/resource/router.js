// build your `/api/resources` router here
const express = require('express')

const Resource = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
      Resource.getAll()

            .then(resources => {

                  res.json(resources) //I keep looking at the word resouces and dude it just doesnt look right... Can I not spell?

            })

            .catch(next)
})

router.post('/', async (req, res) => {
      
      try {

            const addResource = await Resource.add(req.body)

            res.status(201).json(addResource)

      }catch(e) {

            res.status(500).json({message: `Can't add the resource to our database : ${e}`}) //e is just a slick way of using error. love me my 1 letters

      }
})

module.exports = router

//can I just ask what even is the point of using ; anymore? 

