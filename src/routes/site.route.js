const express = require('express');
const route = express.Router();
// add controller
const siteController = require('../app/controllers/SiteController');

// site children in /new in sitecontroller
route.use('/search', siteController.search);

route.use('/', siteController.home);

module.exports = route;
