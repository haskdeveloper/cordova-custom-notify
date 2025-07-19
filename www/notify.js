var exec = require('cordova/exec');

module.exports = {
    notify: function(success, error) {
        exec(success, error, "NotifyPlugin", "notify", []);
    }
};
