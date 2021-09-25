const db = require('../../data/dbConfig')
const Projects = require('./model')

const convertIntToBool = (projects) => {

    projects.forEach(project => {
        if(project.project_completed === 1) {
            project.project_completed = true
        } else {
            project.project_completed = false
        }
    })

}

const convertBooltoInt = (project) => {

    if(project.project_completed === true) {
        project.project_completed = 1
    } else {
        project.project_completed = 0
    }

}

module.exports = {
    convertBooltoInt,
    convertIntToBool
}