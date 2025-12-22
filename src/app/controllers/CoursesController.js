const {mongooseToObject} = require('../../util/mongoose');
const Course = require('../models/Course');

class CoursesController {
    

    // GET /courses/:slug
    show(req, res, next) {
        
        Course.findOne({slug: req.params.slug})
            .then((course) => {
                res.render('courses/show', {course: mongooseToObject(course)});
            })
            .catch(next)
    }

    //GET /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //POST /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/b1gkI0oJg2U/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD3FSHlNp6jVAqO1R7EidqwmbCnbA`
        const course = new Course(formData);
        course.save()
            .then(()=> res.redirect('/'))
            .catch(error => {

            })
    }
}

// Tạo đối tượng new rồi trích xuất ra ngoài
module.exports = new CoursesController();

