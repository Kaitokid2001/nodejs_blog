const express = require('express');
const morgan = require('morgan');
const path = require('path');
// Vs7
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

// add routers in ./routers
const route = require('./routes/index.route');

//add img
app.use(express.static(path.join(__dirname, 'public')));

//middleware khi version express dưới 4.16 và add thêm body-parser
// app.use(express.urlencoded(
//   extended: true
// ));

// Gửi từ code js lên
// app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
    '.hbs',
    engine({
        // đổi tên miền sau cho ngắn lại
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// init route
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
