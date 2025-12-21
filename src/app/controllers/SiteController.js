const Course = require('../models/Course')

class SiteController {
    // GET /home
    async home(req, res) {
        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (err) {
            res.status(400).json({ error: 'error!' });
        }
        // res.render('home');
    }

    // GET /search
    search(req, res) {
        res.render('search');
    }
}

// Tạo đối tượng new rồi trích xuất ra ngoài
module.exports = new SiteController();
