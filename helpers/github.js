const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, cb) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, function(err, res, body) {
    //console.log('error: ', err);
    console.log('statusCode: ', res && res.statusCode);
    console.log(JSON.parse(body));
    if (err) {
      console.log('err: ', err);
    } else {
      cb(null, body);
    }
  });
};

module.exports.getReposByUsername = getReposByUsername;