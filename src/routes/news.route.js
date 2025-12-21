const express = require('express');
const route = express.Router();
// add controller
const newsController = require('../app/controllers/NewsController');

// new children in /new in newctroller
route.get('/:slug', newsController.show);

route.get('/', newsController.index);

module.exports = route;
