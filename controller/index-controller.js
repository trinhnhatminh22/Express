const User = require('../Entity/userInfo.js');
const ValidateUser = require('../module/user_info.js');
var i = 1;
var user1 = [];

module.exports.addUser = function(req, res) {
    var userFromBody = req.body;
    console.log(userFromBody.userName);
    var alarmLog = ValidateUser.validateUserInfo(userFromBody.userName, userFromBody.userPass);
    console.log(alarmLog);
    if (alarmLog.length === 0) {
        var userInfo1 = new User();
        userInfo1.userId = i;
        i++;
        userInfo1.userName = userFromBody.userName;
        userInfo1.userPass = userFromBody.userPass;
        user1.push(userInfo1);
        res.redirect('/');
    } else {
        res.render('create-user', {
            alarmLog: alarmLog
        });
        console.log(alarmLog);
    }
};

module.exports.menu = function(req, res) {
    res.render('first_screen');
};

module.exports.showCreate = function(req, res) {
    res.render('create-user');
};

module.exports.showInformation = function(req, res) {
    res.render('show-info', {
        user: user1
    });
}