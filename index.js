require('dotenv').load(); // Load environment variables

var OAuth = require('oauth');

function fetchBeats1Track(callback) {
  // Define configuration
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.CONSUMER_KEY,
    process.env.CONSUMER_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
  );

  oauth.get(
    'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=beats1plays&count=1',
    process.env.ACCESS_TOKEN,
    process.env.ACCESS_TOKEN_SECRET,
    function(e, data, res) {
      var prefix = "ⓑ ";

      if (e != null) {
        callback('Error: ' + e);
      } else {
        var track = JSON.parse(data)[0].text.replace('#beats1', '');
        callback(null, prefix + track);
      }
    }
  )
}

fetchBeats1Track(function(err, track) {
  console.log(track);
});
