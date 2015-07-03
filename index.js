require('dotenv').load(); // Load environment variables

var OAuth = require('oauth');

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
      console.log(prefix, 'Error:', e);
    } else {
      console.log(prefix, JSON.parse(data)[0].text.replace('#beats1', ''));
    }
  }
)
