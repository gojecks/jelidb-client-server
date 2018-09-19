var btoa = require('btoa'),
    atob = require('atob');

module.exports = function() {

    var publicApi = {
        getDatabaseSize: function() {
            return {
                allocated: 200,
                usage: 1024
            }
        }
    };

    return function(params) {
        if (params.requestState && publicApi[params.requestState]) {
            return publicApi[params.requestState](params);
        }

        return null;
    }
};