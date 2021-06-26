const Resource = require('./model.js');


const checkResourceNameUnique = (req, res, next) => {
    let newName = req.body.resource_name;
    newName = newName.trim().toLowerCase();
  console.log("we are in the checkResourceNameUnique")
    Resource.getAll()
      .then ((resources) => {
        const existingResource = resources.find((resource) => {
          return resource.resource_name.trim().toLowerCase() === newName;
        })
  
        if (existingResource) {
          return res.status(400).json({ message: `Resource name ${newName} already exists` });
        } else {
          next();
        }
      })
      .catch((err) => {
        next(err);
      });
      console.log("done with checkResourceNameUnique")
  };

  module.exports = {
    checkResourceNameUnique
  }
/*

  `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`


  */