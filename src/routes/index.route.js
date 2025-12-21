const newsRoute = require('./news.route');
const courseRoute = require('./courses.route');
const siteRoute = require('./site.route');

function routes(app) {
    app.use('/news', newsRoute);
    app.use('/courses', courseRoute);

    app.use('/', siteRoute);
}

module.exports = routes;
