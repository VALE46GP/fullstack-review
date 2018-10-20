const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('We\'re connected.'));

let reposSchema = mongoose.Schema({
  username: String,
  name: String,
  id: { type: Number, unique: true },
  url: String,
  updated: Date
});

let Repo = mongoose.model('Repo', reposSchema);

let save = (data, cb) => {
  var newData = data.map(repo => {
    return {
      username: repo.owner.login,
      name: repo.name,
      id: repo.id,
      url: repo.url,
      updated: repo.updated_at
    }
  });
  console.log('newData = ', newData);
  Repo.insertMany(newData, function(err, docs) {
    if (err) {
      console.log('error: ', err);
    }else {
      console.log('data saved to db');
    }
  });
};

module.exports.save = save;