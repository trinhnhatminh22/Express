var express = require('express');
var router = express.Router();

module.exports = router;

var i = 3;
var user = [{
        id: 1,
        name: 'MinhTN',
        age: 24
    },
    {
        id: 2,
        name: 'ThuyNT',
        age: 25
    }
];

router.get('/', function(req, res) {
    res.render('first_screen');
});

router.get('/create', function(req, res) {
    var userFromBody = req.body;
    userFromBody.id = i;
    i++;
    user.push(userFromBody);
    res.redirect('/');
});

router.get('/show', function(req, res) {

});