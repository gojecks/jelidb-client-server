var btoa = require('btoa'),
    atob = require('atob');

module.exports = function() {

    var privateApi = {
        getDatabaseSize: function(params) {
            return {
                allocated: 200,
                usage: 1024
            }
        }
    };

    privateApi.merge = function(params) {
        return ({
            // "_db": getFile(jOauth.getFilePath("_".md5(params.requestDB) + ".jvx"))
        });
    }

    privateApi.resource = function(params) {
        return ({
            "state": params.requestState,
            //"resource": getFile(jOauth.getFilePath(params.requestDB + '/_ref.jvx'))
        });
    }

    privateApi.pull = function(params) {
        return ({
            // "_data": getFile(getTableFileName(params.requestDB, params.requestTable))
        });
    }

    privateApi.query = function(params) {
        // $doc = JSON.parse(getTableDataFileName(params.requestDB, params.requestTable));
        // return ({
        //     "_rec": cquery($doc, params.query)
        // });
    }

    privateApi.update = function(params) {
        switch (params.ref) {
            case ('table'):
                //response = getTableUpdate(params.requestDB, params.requestTable, params.checksum, params.type);
                break;
            case ('db'):

                break;
        }
    }

    return function(params) {
        if (params.requestState && privateApi[params.requestState]) {
            return privateApi[params.requestState](params);
        }

        return null;
    }
};