var express = require('express');
var router = express.Router();
var controller = require('../controller/index-controller.js');


router.get('/', controller.menu);
console.log('go here');

router.get('/create-user', controller.showCreate);

router.post('/user/create', controller.addUser);

router.get('/information', controller.showInformation);

module.exports = router;