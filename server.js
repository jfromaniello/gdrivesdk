var express = require('express');
var http    = require('http');

var app = express();

app.configure(function () {
  this.use(express.static(__dirname + '/public'));
});


http.createServer(app).listen(9000, function () {
  console.log('listening in http://localhost:9000/');
});