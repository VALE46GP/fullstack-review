const express = require('express');
let app = express();
let database = require('../database/index.js');
let github = require('../helpers/github.js');
let bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  github.getReposByUsername(req.body.username, function(err, results) {
    if (err) {
      console.log('error: ', err);
      res.sendStatus(500);
    } else {
      console.log('typeof results = ', typeof JSON.parse(results));
      database.save(JSON.parse(results));
      res.sendStatus(201);
    }
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

