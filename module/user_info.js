module.exports.validateUserInfo = function(name, pass) {
    var alarmLog = '';
    if (name.length < 8 || name.length > 32) {
        alarmLog = 'Độ dài tên đăng nhập phải từ 8 tới 32 kí tự';
    } else if (typeof(name.charAt === "number")) {
        alarmLog = 'Kí tự đầu tiên phải là chữ';
    } else if (pass.length < 8 || pass.length > 32) {
        alarmLog = 'Độ dài password phải từ 8 tới 32 kí tự';
    }
    return alarmLog;
};