var express = require('express');
var fs = require('fs');
var ejs = require('ejs');
var partials = require('express-partials');
var app = express();
var port = 8000;

app.set('view engine', 'ejs');

app.use(partials());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/courses', function(req, res) {
    fs.readFile('courses.json', 'utf8', function(err, data) {
        var courses = JSON.parse(data);
        res.locals = { courses : courses}
        res.render('courses.ejs');
    })
})

app.get('/contact', function(req, res) {
    res.render('contact.ejs');
});

/*app.post('/contact', function(req, res) {
    var name = req.body.name
    var phone = req.body.phone
    var interestedClass = req.body.iClass
    var inqury = { name : name, phone : phone, iClass : iClass }
    fs.writeFile('inqury.json')
    })
});*/

app.listen(port);
console.log('Server running on http://localhost:' + port)