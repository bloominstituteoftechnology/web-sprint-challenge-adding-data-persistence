const router = require('express').Router();
const db = require('../../data/dbConfig.js');
const { 
    checkResourceNameUnique    
} = require('./resource-middleware.js')
const Resource = require('./model.js');


router.get('/', async (req, res, next) => {
    console.log("in the router get")
    try {
        console.log("in the try router get")
        const resources = await Resource.getAll() 
        console.log("resources: ", resources)
        res.status(200).json(resources)
      } catch (err) {
        next(err)
      }
});

  // add middleware
// router.post('/', async (req, res, next) => {
//     const resourceData = req.resource;
//     console.log("resourceData: ", resourceData);
//     try {
//         const postedResource = await Resource.create(resourceData)
//         console.log("postedResource: ", postedResource);
//         res.status(201).json(postedResource);
//       } catch (err) {
//         console.log("Error in create: ", err)
//         next(err)
//       }
// });



module.exports = router;

/*  
- [ ] `[POST] /api/resources`
  - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

- [ ] `[GET] /api/resources`
  - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

*/