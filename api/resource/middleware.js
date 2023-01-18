const Resource = require('./model')

async function checkResource(req, res, next) {
    const { resource_name } = req.body
    const resource = await Resource.getByName(resource_name)
    try {
        if(resource.length === 0){
            next();
        }else{
            next({ status: 400, message: 'Resource name must be unique!'})
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    checkResource
}