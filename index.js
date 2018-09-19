#!/usr/bin/env node

var chalk = require('chalk'),
    clear = require('clear'),
    CLI = require('clui'),
    figlet = require('figlet'),
    inquirer = require('inquirer'),
    Preferences = require('preferences'),
    Spinner = CLI.Spinner,
    express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    touch = require('touch'),
    fs = require('fs-extra'),
    files = require('./libs/helper'),
    port = process.env.PORT || 3000,
    router = express.Router(),
    bodyParser = require('body-parser'),
    btoa = require('btoa'),
    atob = require('atob'),
    getController = require('./controllers/getController')(),
    postController = require('./controllers/postController')(),
    putController = require('./controllers/putController')(),
    deleteController = require('./controllers/deleteController')();
router.use(bodyParser.urlencoded({ extended: true }));

clear();
console.log(
    chalk.yellow(
        figlet.textSync('JELI-SERVER', { horizontalLayout: 'full' })
    )
);

function buildRequestParams(req) {
    var params = atob(req).split(":");
    return {
        requestDB: params[0],
        requestState: params[1],
        requestTable: params[2],
        requestTime: parseInt(params[3])
    };
}

app.options("/*", function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, X-CSRF-TOKEN');
    res.sendStatus(200);
});

app.get('/', function(req, res) {
    const file = '/tmp/this/path/does/not/exist'

    // Callback usage:
    fs.pathExists(file, (err, exists) => {
        console.log(err) // => null
        console.log(exists) // => false
    })
    res.status(200).send(getController(buildRequestParams(req.query._r)));
});

app.put('/', function(req, res) {

});

app.delete('/', function(req, res) {

});

app.post('/', function(req, res) {

});

http.listen(port, '0.0.0.0', function() {
    console.log(chalk.green('listening on *:' + port));
});