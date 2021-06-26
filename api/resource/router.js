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

/* Received: 
    [{"resource_id":1,"resource_name":"keyboard","resource_description":null},{"resource_id":2,"resource_name":"computer","resource_description":"Windows PC"}] */


router.post('/', checkResourceNameUnique, async (req, res, next) => {
    // const resourceData = req.resource;
    const resourceData = req.body;

    console.log("resourceData: ", resourceData);
    try {
        const postedResource = await Resource.create(resourceData)
        console.log("postedResource: ", postedResource);
        res.status(201).json(postedResource);
      } catch (err) {
        console.log("Error in create: ", err)
        next(err)
      }
});

/* Received:
  {"resource_id":4,"resource_name":"phone1","resource_description":null} */



module.exports = router;

/*  
- [ ] `[POST] /api/resources`
  - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

- [ ] `[GET] /api/resources`
  - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

*/