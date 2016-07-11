// variables

var keys = require('./keys..js');
var Twitter = require('twitter');
var spotify = require('spotify');
var fs = require('fs');

// twitter

var client = new Twitter(request.twitterKeys);

if (task =='my-tweets'){

  console.log("my-tweets");
  

  var client = new Twitter(keys.twitterKeys);
  var params ={screen_name: 'kRojas',count: 20};
  client.get(search/tweets, params, function(err, tweets,reponse){
    if (!err){


        for ( i = 0; i< 20; i++)
      console.log(tweets);
    }
  });

};

// spotify
var song = function(song){
  console.log('hi');

  if(question == undefined){

    question = "whats+my+age+again";
  }

  var queryUrl ="http://api.spotify.com/v1/search?q=' + question + '&type=track&limit=1";



    spotify.get(queryUrl, function(error ,data){

      if (error){
        console.log(error);
      }
      else {
        var songObject = data;
        console.log(songObject);

        var text ={

              artist:songObject.tracks.item[0].artist[0].name,
              song: songObject.tracks.item[0].item[0].name,
              link: songObject.tracks.item[0].preview_url,
              album:songObject.tracks.item[0].album.name
        }

        console.log(text);


        fs.append('./random.txt',text);
      }

    })
  }