const express = require('express');
let app = express();
let database = require('../database/index.js');
let github = require('../helpers/github.js');
let bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// send back 25 repos with most recent updated_at property
app.get('/repos', function (req, res) {
  database.getAll(function(err, results) {
    if (err) {
      res.status(500).send(err.message);
    } else {
      console.log('YOU DONE GOT A GET');
      res.send({results});
    }
  });
});

app.post('/repos', function (req, res) {
  console.log('req.body>>>>>>>>>>>>>>>>>', req.body);
  github.getReposByUsername(Object.keys(req.body)[0], function(err, results) {
    if (err) {
      res.status(500).send(err.message);
    } else {
      // save data to db
      console.log('this post request is kind of working i think maybe', results);
      database.save(JSON.parse(results));
      res.sendStatus(201);
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

