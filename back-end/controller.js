var path = require('path');
var mongoose = require('mongoose');

var controllers = {
    index: index,
    playground: playground
};

function index(req, res) {
    res.sendFile(__dirname + '/front-end/index.html'); 
}

function playground(req, res) {
    // this may be a security risk, but it allows for a separation of front- and back-end code
    res.sendFile(path.resolve(__dirname, '..', 'front-end', 'component-playground', 'index.html' ));  
}

module.exports = controllers;