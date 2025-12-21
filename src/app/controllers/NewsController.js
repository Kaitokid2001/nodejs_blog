class NewsController {
    // GET /news
    index(req, res) {
        res.render('news');
    }

    // GET /news/:slug
    show(req, res) {
        res.send('news detail !!');
    }
}

// Tạo đối tượng new rồi trích xuất ra ngoài
module.exports = new NewsController();
