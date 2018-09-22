const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const hbs = require('hbs');

// connect to mongoose
//mongoose.connect('mongodb://localhost/thesis');
var db = mongoose.connection;

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

// app.use((req, res, next) => {
//     var now = new Date().toString();
//     var log = `${now}: ${req.method} ${req.url}`;
//     console.log(log);
//     next();
// });


hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

// under maintainance
// app.use((req, res, next) => {
//     res.render('willbeback.hbs');
// });

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index.hbs');
});

app.get('/login', (req, res) => {
    res.render('login.hbs');
})

app.listen(3000, '127.0.0.1', () => {
    console.log('listening on port 3000');
});