require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 5000 || process.env.PORT;


//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Static Files
app.use(express.static('public'));

//Template Engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    const locals = {
        title: "NodeJs Notes",
        description: "Free NodeJs Notes App"
    }
    res.render('index', locals);
})

// Routes
app.use('/', require('./server/routes/index'));

app.listen(port, () => {
    console.log(`App listening on ${port}`);
})