const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('We\'re connected.'));

let reposSchema = mongoose.Schema({
  username: String,
  name: String,
  id: { type: Number, unique: true },
  html_url: String,
  updated: Date
});

let Repo = mongoose.model('Repo', reposSchema);



let save = (data, cb) => {
  var formattedData = data.map(repo => {
    return {
      username: repo.owner.login,
      name: repo.name,
      id: repo.id,
      html_url: repo.html_url,
      updated: repo.updated_at
    }
  });

  Repo.insertMany(formattedData, function(err, docs) {
    if (err) {
      console.log('error: ', err);
    } else {
      console.log('data saved to db');
    }
  });
};

let getAll = (cb) => {
  Repo.find().
    sort('-updated').
    limit(25).
    exec(cb);
};

module.exports.save = save;
module.exports.getAll = getAll;