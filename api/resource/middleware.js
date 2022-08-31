const model = require('./model')

module.exports = {
    async validateUnique(req, res, next) {
        const resource = await model.find(req.params.resource_id);
        if(resource.resource_name) return next({status: 404, message: 'resource name already in use!'});
        next();
    }
}
