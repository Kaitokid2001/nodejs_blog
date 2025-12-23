const {mutipleMongooseToObject} = require('../../util/mongoose');
const Course = require('../models/Course');

class MeController {
    

    // GET /me/stored/courses
    storedCourses(req, res, next) {
        
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, delectedCount]) => {
                res.render('me/stored-courses', {
                    delectedCount,
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }
    // GET /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)
    }
}

// Tạo đối tượng new rồi trích xuất ra ngoài
module.exports = new MeController();

