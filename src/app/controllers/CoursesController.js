const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose');

class CoursesController {
    

    // GET /courses/:slug
    show(req, res, next) {
        
        Course.findOne({slug: req.params.slug})
            .then((course) => {
                res.render('courses/show', {course: mongooseToObject(course)});
            })
            .catch(next)
    }
}

// Tạo đối tượng new rồi trích xuất ra ngoài
module.exports = new CoursesController();

