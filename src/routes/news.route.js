const express = require('express');
const route = express.Router();
// add controller
const newsController = require('../app/controllers/NewsController');

// new children in /new in newctroller
route.use('/:slug', newsController.show);

route.use('/', newsController.index);

module.exports = route;