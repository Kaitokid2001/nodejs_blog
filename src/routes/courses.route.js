const express = require('express');
const route = express.Router();

const coursesController = require('../app/controllers/CoursesController');

route.get('/create', coursesController.create);
route.post('/store', coursesController.store);
route.get('/:id/edit', coursesController.edit);
route.put('/:id', coursesController.update);
route.delete('/:id', coursesController.destroy);
route.get('/:slug', coursesController.show);

module.exports = route;
