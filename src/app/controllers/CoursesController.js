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

    //POST /courses/:id/edit
    edit(req, res, next){
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit',{
                course: mongooseToObject(course)
            }))
            .catch(next)
    }

    //PUT /courses/:id
    update(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //DELETE /courses/:id
    destroy(req, res, next){
        Course.delete({_id: req.params.id})
            .then(()=> res.redirect('/me/stored/courses'))
            .catch(next)
    }
    
    //PATH /courses/:id/force
    forceDestroy(req, res, next){
        Course.deleteOne({_id: req.params.id})
            .then(()=> res.redirect('/me/stored/courses'))
            .catch(next)
    }

    //PATH /courses/:id/restore
    restore(req, res, next){
        Course.restore({_id: req.params.id})
            .then(()=> res.redirect('/me/stored/courses'))
            .catch(next)
    }


}

// Tạo đối tượng new rồi trích xuất ra ngoài
module.exports = new CoursesController();

