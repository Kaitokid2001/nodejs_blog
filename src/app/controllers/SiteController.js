class SiteController {
    // GET /home
    home(req, res) {
        res.render('home');
    }

    // GET /search
    search(req, res) {
        res.render('search');
    }
}

// Tạo đối tượng new rồi trích xuất ra ngoài
module.exports = new SiteController();
