var app = require('express')();
var bodyParser = require('body-parser')

require('./api/db');
var User = require('./api/user');
var Report = require('./api/report');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  console.log(req.body.image);
  res.json({});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Server listening on port ' + (process.env.PORT || 3000));
});