const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
// Vs7
const { engine } = require('express-handlebars');
const app = express();
const port = 3001;
const db = require('./config/db')

// add routers in ./routers
const route = require('./routes/index.route');

//add img
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

//Connect to db
db.connect();

//middleware khi version express dưới 4.16 và add thêm body-parser
app.use(express.urlencoded(
  {extended: true}
));

// Gửi từ code js lên
app.use(express.json());

// Add method override
app.use(methodOverride('_method'));

// Template engine
app.engine(
    '.hbs',
    engine({
        // đổi tên miền sau cho ngắn lại
        extname: '.hbs',
        helpers: {
            sum: (a,b)=> a+b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources',  'views'));

// init route
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
