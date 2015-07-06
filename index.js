require('dotenv').load(); // Load environment variables

var child_process = require('child_process'),
    OAuth         = require('oauth'),
    ent           = require('ent');

function hideFeatures(track) {
  // Replace (feat*), [feat*]
  track = track
    .replace(/\s\(feat[^\)]+\)/i, '')
    .replace(/\s\[feat[^\]]+\]/i, '');

  // Replace inline "feat*"
  var parts = track.split(' - ', 2);
  if (parts.length == 2) {
    var song      = parts[0],
        artist    = parts[1],
        featRegex = /\sfeat.*$/;

    song   = song.replace(featRegex, '');
    artist = artist.replace(featRegex, '');

    track = song + ' - ' + artist;
  }

  return track;
}

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
        callback(e);
      } else {
        var track = ent.decode(
          JSON.parse(data)[0].text
            .replace('#beats1', '')
            .replace(/\shttps?:\/\/t.co\/\w+/, '')
        );

        if (process.env.HIDE_FEATURES) {
          track = hideFeatures(track);
        }

        callback(null, prefix + track.trim());
      }
    }
  )
}

function fetchiTunesTrack(callback) {
  child_process.execFile("osascript", ["itunes.scpt"], function(err, track) {
    track = track.trim(); // Remove \n
    if (process.env.HIDE_FEATURES) {
      track = hideFeatures(track);
    }

    callback(err, track);
  });
}

fetchiTunesTrack(function(err, iTunesTrack) {
  if (err) {
    console.log("Error:", err);
  } else if (iTunesTrack != "") {
    console.log(iTunesTrack);
  }
  fetchBeats1Track(function(err, beatsTrack) {
    if (err) {
      console.log("Error:", err);
    } else {
      console.log(beatsTrack);
    }
  });
});
