const express = require('express');
let app = express();
let database = require('../database/index.js');
let github = require('../helpers/github.js');
let bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

// send back 25 repos with most recent updated_at property
app.get('/repos', function (req, res) {
  database.getAll(function(err, results) {
    if (err) {
      res.status(500).send(err.message);
    } else {
      console.log('YOU DONE GOT A GET');
      res.send(results);
    }
  });
});

app.post('/repos', function (req, res) {
  github.getReposByUsername(req.body.username, function(err, results) {
    if (err) {
      res.status(500).send(err.message);
    } else {
      // save data to db
      database.save(JSON.parse(results));
      // fetch updated results from db
      //database.getAll();

      res.sendStatus(201);
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

