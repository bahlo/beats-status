# beats-status

![Beats 1 track](https://cloud.githubusercontent.com/assets/1725839/8518274/c718700a-23c8-11e5-840e-33b2064864f6.png)

Shows the currently playing track in
[Beats 1](https://www.apple.com/de/music/radio/) or your currently playing
iTunes track in your Menubar.

## Installation

You'll need [TextBar](http://www.richsomerfield.com/apps/) (currently 2.99 $)
and [Node.js](https://nodejs.org).

The preferred way to install these is [Homebrew](http://brew.sh):
```bash
$ brew install caskroom/cask/brew-cask
$ brew cask install textbar
$ brew install node
```

## Setup

### Clone this repository to any folder (recommended: `$HOME/scripts`):

`git clone git@github.com:bahlo/beats-status.git $HOME/scripts/beats-status`

#### Create Twitter application

1. Go to https://apps.twitter.com
2. Click `Create New App`
3. Fill in the form and create app (fields doesn't matter)
4. Copy the following keys from `Keys and Access Tokens`:
  * Consumer Key (API Key)
  * Consumer Secret (API Secret)
  * Access Token
  * Access Token Secret
5. Create an `.env`-file with the following contents:

```bash
CONSUMER_KEY=<your consumer key>
CONSUMER_SECRET=<your consumer secret>
ACCESS_TOKEN="<your access token>"
ACCESS_TOKEN_SECRET=<your access token secret>
```


#### Setup Textbar like this:

![TextBar Setup](https://cloud.githubusercontent.com/assets/1725839/8518127/890145a4-23c7-11e5-8457-f6e8366c6c88.png)

Script: `cd $HOME/scripts/beats-status && /usr/local/bin/node index.js`

#### Ready to go

Now your menubar shows the currently playing Beats 1 track or your currently
playing iTunes track. If you click on the iTunes track, you can quickly check
what's playing on Beats 1.

![Beats1 Track](https://cloud.githubusercontent.com/assets/1725839/8518274/c718700a-23c8-11e5-840e-33b2064864f6.png)

![iTunes track](https://cloud.githubusercontent.com/assets/1725839/8518308/0973e9d4-23c9-11e5-8383-f57d3f3a0dad.png)

![iTunes expanded](https://cloud.githubusercontent.com/assets/1725839/8518332/3a9bf024-23c9-11e5-9f52-a0ec49b92c60.png)

## License

Licensed under [WTFPL](http://www.wtfpl.net), for more information see the
LICENSE file.
