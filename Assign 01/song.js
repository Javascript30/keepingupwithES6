// HOMEWORK ASSIGNMENT #1 : Data Types

var songName = "Don't Give Up On Me";
// Andrew Charles Grammer is an American singer male , songwriter, and record producer.
// He's 37-years-old
const artist = "Andy Grammer";
/*The album contains 13 songs: ---1. Don't give up on me(of course the best first)
                              --  2.My Own Hero
                              --  3.I Found You
                              --  4.Some Girl
                              --  5.She'd Say(second best)
                              --  6.I Am Yours
                              --  7.Spotlight
                              --  8.My Own Hero
                              -- + 5 MORE
*/
var isWorthIt = true;
var album = "Naive";
var genre = "pop";
var releaseYear = 2019;
var nominations = "Teen Choice Award for Choice Movie Song";
var youtubeViews = "75,516,397"; // Watched it too ----Like 100 times over
var playTimeInSeconds = 215; //Too short ain't it???


/*
This is a Romantic drama starring Cole Sprouse and Haely Lu Richardson
The part were the song is played is just woooow ....the song made that part (official music video is from this movie tooo so just had to watch it)
Released in 2019
Romance of two teenagers with cystic fibrossis admitted at a certain hospital
the teen boy was care free ; the girl oriented to live well with the diagnosis .....*** don't take this as synopsis :: better than This
Rating for me: 08/10
*/
var movieFeatured = "Five Feet Apart";

var bestSong = {
  song: "Don't Give Up On Me",
  artist: "Andy Grammer",
  worthIt: true,
  album: "Naive",
  genre: "pop",
  released: 2019,
  nominated: "Teen Choice Award for Choice Movie Song",
  youtubeviews: 75516397,
  time: "215 seconds",
};

var mySong = [];
mySong.push(songName, artist);

// console.log("This is Lesley Kimutai's favorite song:  \n");

console.log("\nTitle: " + songName);
console.log("Artist: " + artist);
console.log("Album: " + album);
console.log("Genre: " + genre);
console.log("Year released: " + releaseYear);
console.log("Nominated for: " + nominations);
console.log("Number of views on youtube: " + youtubeViews);
console.log("The song is " + playTimeInSeconds + " seconds long");
console.log("The song featured in the " + movieFeatured + " movie.");

console.log("\nIs this song worth your time: " + isWorthIt);

console.log("\nThe song was nominated for the " + bestSong.nominated);

console.log("The artist that released my best song is " + mySong[1]);