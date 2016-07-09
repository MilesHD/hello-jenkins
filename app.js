var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(process.env.PORT || 5000, function () {
  console.log("Server listening on port");  
  console.log("I am a changed file");  
});

module.exports = app;
