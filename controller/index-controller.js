var i = 3;
var user = [];
var user_obj = function(id, name, pass) {
    this.id = id;
    this.name = name;
    this.pass = pass;
    getName() = () => {
        return this.name;
    };

};


module.exports.addUser = function(req, res) {
    var userFromBody = req.body;
    var user_obj1 = new user_obj(i, userFromBody.userName, userFromBody.userPass);
    user.push(user_obj1);
    console.log(user.getName());
    res.redirect('/');
};

module.exports.menu = function(req, res) {
    res.render('first_screen');
};

module.exports.showCreate = function(req, res) {
    res.render('create-user');
};

module.exports.showInformation = function(req, res) {
    res.render('show-info', {
        user: user
    });
}