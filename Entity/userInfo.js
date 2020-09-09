class User {
    _userId = '';
    _userName = '';
    _userPass = '';
    constructor() {

    }

    set userId(id) {
        this._userId = id;
    };
    set userName(name) {
        this._userName = name;
    };
    set userPass(pass) {
        this._userPass = pass;
    };
    get userId() {
        return this._userId;
    };
    get userName() {
        return this._userName;
    };
    get userPass() {
        return this._userPass;
    };
}

module.exports = User;