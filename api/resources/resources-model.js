const db = require('../../data/dbConfig')

const find = () => {
	return db('resources')
}

const findById = (id) => {
	return db('resources').where({ id }).first()
}

const add = (resource) => {
return db('resources')
	.insert(resource)
	.then((ids) => {
		return findById(ids[0])
	})
}

module.exports = {
	find,
	findById,
  add
}