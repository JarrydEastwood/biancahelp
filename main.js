
// This is empty so we can fill it with JS response
var video1 = ""
var video2 = ""
var video3 = ""


var apiKey = "AIzaSyBsSHP_xADDTemOZHM9PsQvj1KxLhl3fcU"

// Empty these and fill with your logic as discussed to get the right keywords in search
var keyword1 = "Happy";
var keyword2 = "Gym";
var keyword3 = "chill";




var searchText = keyword1 + "%20" + keyword2 + "%20" + keyword3 + "%20" +  "music";

var url = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&q=" + searchText + "&maxResults=15&order=rating&regionCode=AU&type=video&videoDuration=long&videoEmbeddable=true&part=snippet";

function simpleTest() {

  console.log(url);
  $(document).ready(function () {
  $.getJSON(url, function (apiData) {

   console.log("apiData = ", apiData);

   var data = apiData.items;
  // Assign first result to video1
     video1 = data[0].id.videoId;
     console.log("video1 ID = ", video1);

    // Assign second result to video2
     video2 = data[1].id.videoId;
     console.log("video2 ID = ", video2);

    // Assign third result to video3
     video3 = data[2].id.videoId;
     console.log("video3 ID = ", video3);

    //  when ready you can continue up to 15 results (if you want more then change it in the url where it says "maxResults=15"")
    })
  })
}

// Leave empty so we can fill it later
var videoID = ""

function setVideo1(){
  loadVideo(video1)
}

function setVideo2(){
  loadVideo(video2)
  }

function setVideo3(){
  loadVideo(video3)
}

function loadVideo(videoID) {
  if(player) { player.loadVideoById(videoID); }
}


   // 2. This code loads the IFrame Player API code asynchronously.
   var tag = document.createElement('script');

   tag.src = "https://www.youtube.com/iframe_api";
   var firstScriptTag = document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

   // 3. This function creates an <iframe> (and YouTube player)
   //    after the API code downloads.
   var player;
   function onYouTubeIframeAPIReady() {
     player = new YT.Player('player', {
       height: '390',
       width: '640',
       videoId: videoID,
       playerVars: {
         'playsinline': 1
       },
       events: {
         'onReady': loadVideo(),
         'onStateChange': onPlayerStateChange
       }
     });
   }

   // 4. The API will call this function when the video player is ready.
   function onPlayerReady(event) {
     event.target.playVideo();
   }

   // 5. The API calls this function when the player's state changes.
   //    The function indicates that when playing a video (state=1),
   //    the player should play for six seconds and then stop.
   var done = false;
   function onPlayerStateChange(event) {
     if (event.data == YT.PlayerState.PLAYING && !done) {
       setTimeout(stopVideo, 6000);
       done = true;
     }
   }
   function stopVideo() {
     player.stopVideo();
   }


// Jarryd stuff below here ------------------------

// // Random Location Array

// let imageSrc = 
//   [ "assets/images/havana.png",
//     "assets/images/vancouver.png",
//     "assets/images/santorini.png",
//     "assets/images/dubrovnik.png",
//     "assets/images/tokyo.png",
//     "assets/images/losangeles.png",
//     "assets/images/ubud.png",
//     "assets/images/neworleans.png",
//     "assets/images/paris.png",
//     "assets/images/marrakesh.png",
// ]

// var reset = false;

// var randomLocations = [
//     "Ubud Indonesia",
//     "New Orleans USA",
//     "Marrakesh Morocco",
//     "Paris France",
//     "Cape Town South Africa",
//     "Dubrovnik Croatia",
//     "Tokyo Japan",
//     "Vancouver Canada",
//     "Los Angeles USA",
//     "Vernazza Italy",
//     "Buenos Aires Argentina",
//     "London England",
//     "Jaipur India",
//     "Havana Cuba",
//     "Christchurch New Zealand",
//     "Hydra Greece",
//   ];

//   // Random Month Array
//   var month = [
//     "january",
//     "february",
//     "march",
//     "april",
//     "may",
//     "june",
//     "july",
//     "august",
//     "september",
//     "october",
//     "november",
//     "december",
//   ];
  
//   // Weather Variables
//   var weatherKey = "d9e3acc582b222c6021692be631852c5";
//   var travelCity = "";
//   var travelCountry = "";
//   var travelLat = "";
//   var travelLong = "";
//   var weatherDateStart = "";
//   var weatherDateEnd = "";
//   var travelMonth = "";
//   var travelLocation = "";
  
//   // Season Start and end dates - for North and South Hemispheres
//   const startNorthWinter = "2020-12-01";
//   const endNorthWinter = "2021-02-28";
  
//   const startNorthSpring = "2021-03-01";
//   const endNorthSpring = "2021-05-31";
  
//   const startNorthSummer = "2021-06-01";
//   const endNorthSummer = "2021-08-31";
  
//   const startNorthAutumn = "2021-09-01";
//   const endNorthAutumn = "2021-11-31";
  
//   const startSouthSummer = "2020-12-01";
//   const endSouthSummer = "2021-02-28";
  
//   const startSouthAutumn = "2021-03-01";
//   const endSouthAutumn = "2021-05-31";
  
//   const startSouthWinter = "2021-06-01";
//   const endSouthWinter = "2021-08-31";
  
//   const startSouthSpring = "2021-09-01";
//   const endSouthSpring = "2021-11-31";
  
//   // Season Variables
//   const northWinter = ["december", "january", "february"];
//   const northSpring = ["march", "april", "may"];
//   const northSummer = ["june", "july", "august"];
//   const northAutumn = ["september", "october", "november"];
  
//   const southSummer = ["december", "january", "february"];
//   const southAutumn = ["march", "april", "may"];
//   const southWinter = ["june", "july", "august"];
//   const southSpring = ["september", "october", "november"];
  
//   // Geolocation Variables
//   var geoKey = "234979e2ff9e423095e4b2c869c1c97b";
//   var hemisphere = "";
  
//   //Change this with new season function

//   var travelSeason = "";

//   function getData() {

//   if (document.getElementById("infoHider").classList.contains('hidden')) {
//     console.log("Empty container");

//       $(document).ready(function () {
//       //Calling function to find hemisphere of travel location
//       findHemisphere();

//       eval("season"+ travelSeason + "()");

//       document.getElementById("content").classList.add(travelSeason);
//       document.getElementById("travelImage").classList.remove("hidden");
//       document.getElementById("landingScreen").classList.add("hidden");
  
//       // Pulls the travelLocation input from the for and sets it to the variable travelLocation
//       travelLocation = document.getElementById("travelLocation").value;
  
//       //Setting up of URL for geolocation of travelLocation, uses variables for travel location and the relevant API key needed.
//         // Sidenote -  To make my code look cleaner, I tried to make the geolocation section a seperate function like getPhotos/getWeather. 
//         //  My goal was the have the getData function as essentially a module caller but when I tried (on Wednesday 26 October) after all the functionality was working,
//         //  it completely broke the weatherAPI, I couldnt figure out why easily so I pulled the plug. With more time I would go back and try to fix that up.
//       var url =
//         "https://api.geoapify.com/v1/geocode/search?text=" +
//         travelLocation +
//         "&limit=1&format=json&apiKey=" +
//         geoKey;
  
//       $.getJSON(url, function (apiData) {
  
//         //Storing the first result as variable "item" to allow for easier data sorting
//         var item = apiData.results[0];
  
//       // Storing the individual object items as variables to be used
//         var storeCity = item.city;
//         var storeCountry = item.country;
//         var storeLat = item.lat;
//         var storeLong = item.lon;
  
//         // Storing city and country in variables to be used by APIs
//         travelCity = storeCity;
//         travelCountry = storeCountry;
  
//         // lat and long needs to be 2 decimal places for WeatherAPI
//         travelLat = storeLat.toFixed(2);
//         travelLong = storeLong.toFixed(2);
  
   
//         // Getting content on the page
//           // Creating variables with HTML Tags to display the data on page.
//           // The class "capitilise" (re)capitalises the travel month after it was put into lower case to be used in seasonal functions.
//         var city = $("<h3>").html("City: " + storeCity);
//         var country = $("<h3>").html("Country: " + storeCountry);
//         var long = $('<p class = "topSpace">').html("Longitude: " + travelLong);
//         var lat = $("<p>").html("Latitude: " + travelLat);
//         var hemi = $("<p>").html("Hemisphere: " + hemisphere);
//         var month = $('<p class="capitilise">').html("Month: " + travelMonth);
//         var season = $("<p>").html("Season: " + travelSeason);
  
//         // Appending the HTML variables to relevant container using the class
//         $(".containerLocation").append(
//           city,
//           country,
//           long,
//           lat,
//           hemi,
//           month,
//           season
//         );   


//         // Call function to get the Weather data.
//         getWeather()
//       });
//     });
//     }
//       else {
//         console.log("this is the else trigger, there should be stuff in the infoHider div");
//         $(document).ready(function () {
//          document.getElementById("infoHider").classList.add("hidden");
//          document.getElementById("idLocation").removeChild(document.getElementById("idLocation").lastElementChild);
//          document.getElementById("idLocation").removeChild(document.getElementById("idLocation").lastElementChild);
//          document.getElementById("idLocation").removeChild(document.getElementById("idLocation").lastElementChild);
//          document.getElementById("idLocation").removeChild(document.getElementById("idLocation").lastElementChild);
//          document.getElementById("idLocation").removeChild(document.getElementById("idLocation").lastElementChild);
//          document.getElementById("idLocation").removeChild(document.getElementById("idLocation").lastElementChild);
//          document.getElementById("idLocation").removeChild(document.getElementById("idLocation").lastElementChild);

//          document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//          document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//          document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//          document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//          document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//          document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//          document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
         
//          getData();
//         });
//       };
//   }

// function seasonSpring() {
//   if (document.getElementById("infoHider").classList.contains('hidden')) {
//     $(document).ready(function () {
//     document.getElementById("content").classList.remove("winter");
//     document.getElementById("content").classList.remove("summer");
//     document.getElementById("content").classList.remove("autumn");
//     document.getElementById("content").classList.add("spring");
// })}

// else {
//   $(document).ready(function () {
//     document.getElementById("content").classList.remove("winter");
//     document.getElementById("content").classList.remove("summer");
//     document.getElementById("content").classList.remove("autumn");
//     document.getElementById("content").classList.add("spring");
//     // Need to reset to weather data and call new season here
//     document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//     document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//     document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//     document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//     document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//     document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//     document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//     travelSeason = "Spring";
//     var season = $("<p>").html("Season: " + travelSeason);
//     document.getElementById("idLocation").removeChild(document.getElementById("idLocation").lastElementChild);
//     $(".containerLocation").append(season);
//     getWeather();
//   })}
// }


// function seasonSummer() {
//   if (document.getElementById("infoHider").classList.contains('hidden')) {
//     $(document).ready(function () {
//     document.getElementById("content").classList.remove("winter");
//     document.getElementById("content").classList.remove("spring");
//     document.getElementById("content").classList.remove("autumn");
//     document.getElementById("content").classList.add("summer");
//   })}

//   else {
//       $(document).ready(function () {
//       document.getElementById("content").classList.remove("winter");
//       document.getElementById("content").classList.remove("spring");
//       document.getElementById("content").classList.remove("autumn");
//       document.getElementById("content").classList.add("summer");
//       // Need to reset to weather data and call new season here
//       document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//       document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//       document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//       document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//       document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//       document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//       document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//       travelSeason = "Summer";
//       var season = $("<p>").html("Season: " + travelSeason);
//       document.getElementById("idLocation").removeChild(document.getElementById("idLocation").lastElementChild);
//       $(".containerLocation").append(season);
//       getWeather();
//     })}
// }

// function seasonAutumn() {
//   if (document.getElementById("infoHider").classList.contains('hidden')) {
//     $(document).ready(function () {
//       document.getElementById("content").classList.remove("winter");
//       document.getElementById("content").classList.remove("spring");
//       document.getElementById("content").classList.remove("summer");
//       document.getElementById("content").classList.add("autumn");
//     })}
  
//     else {
//       $(document).ready(function () {
//         document.getElementById("content").classList.remove("winter");
//         document.getElementById("content").classList.remove("spring");
//         document.getElementById("content").classList.remove("summer");
//         document.getElementById("content").classList.add("autumn");
//     // Need to reset to weather data and call new season here
//         document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//         document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//         document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//         document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//         document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//         document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//         document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//         travelSeason = "Autumn";
//         var season = $("<p>").html("Season: " + travelSeason);
//         document.getElementById("idLocation").removeChild(document.getElementById("idLocation").lastElementChild);
//         $(".containerLocation").append(season);
//         getWeather();
//       })}
// }

// function seasonWinter() {
//   if (document.getElementById("infoHider").classList.contains('hidden')) {
//   $(document).ready(function () {
//   document.getElementById("content").classList.remove("spring");
//   document.getElementById("content").classList.remove("summer");
//   document.getElementById("content").classList.remove("autumn");
//   document.getElementById("content").classList.add("winter");
//   })}

//   else {
//     $(document).ready(function () {
//     document.getElementById("content").classList.remove("spring");
//     document.getElementById("content").classList.remove("summer");
//     document.getElementById("content").classList.remove("autumn");
//     document.getElementById("content").classList.add("winter");
//   // Need to reset to weather data and call new season here
//     document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//     document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//     document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//     document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//     document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//     document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//     document.getElementById("idWeather").removeChild(document.getElementById("idWeather").lastElementChild);
//     travelSeason = "Winter";
//     var season = $("<p>").html("Season: " + travelSeason);
//     document.getElementById("idLocation").removeChild(document.getElementById("idLocation").lastElementChild);
//     $(".containerLocation").append(season);
//     getWeather();
//     })}
// }

// function showCard() {
//   document.getElementById("dataCard").classList.toggle("hidden");
//   }


//   function removeActive() {
//     document.getElementById("havanaBtn").classList.remove('bg-gray-700');
//     document.getElementById("vancouverBtn").classList.remove('bg-gray-700');
//     document.getElementById("santoriniBtn").classList.remove('bg-gray-700');
//     document.getElementById("dubrovnikBtn").classList.remove('bg-gray-700');
//     document.getElementById("tokyoBtn").classList.remove('bg-gray-700');
//     document.getElementById("losangelesBtn").classList.remove('bg-gray-700');
//     document.getElementById("ubudBtn").classList.remove('bg-gray-700');
//     document.getElementById("neworleansBtn").classList.remove('bg-gray-700');
//     document.getElementById("parisBtn").classList.remove('bg-gray-700');
//     document.getElementById("marrakeshBtn").classList.remove('bg-gray-700');
//   }

// function destinationHavana() {
// removeActive();
// document.getElementById("havanaBtn").classList.add('bg-gray-700');
// document.getElementById("travelLocation").value = 'Havana Cuba';
//   document.getElementById("travelImage").src = imageSrc[0];
//   getRandom();
//   getData();
// }

// function destinationVancouver() {
//   removeActive();
//   document.getElementById("vancouverBtn").classList.add('bg-gray-700');
//   document.getElementById("travelLocation").value = 'Vancouver Canada';
//   document.getElementById("travelImage").src = imageSrc[1];
//   getRandom();
//   getData();
// }
// function destinationSantorini() {
//   removeActive();
//   document.getElementById("santoriniBtn").classList.add('bg-gray-700');
//   document.getElementById("travelLocation").value = 'Santorini Greece';
//   document.getElementById("travelImage").src = imageSrc[2];    
//   getRandom();
//   getData();
// }

// function destinationDubrovnik() {
//   removeActive();
//   document.getElementById("dubrovnikBtn").classList.add('bg-gray-700');
//   document.getElementById("travelLocation").value = 'Dubrovnik Croatia';
//   document.getElementById("travelImage").src = imageSrc[3];
//   getRandom();
//   getData();
// }

// function destinationTokyo() {
//   removeActive();
//   document.getElementById("tokyoBtn").classList.add('bg-gray-700');
//     document.getElementById("travelLocation").value = 'Tokyo Japan';
//     document.getElementById("travelImage").src = imageSrc[4];
//     getRandom();
//     getData();
// }

// function destinationLosAngeles() {
//   removeActive();
//   document.getElementById("losangelesBtn").classList.add('bg-gray-700');
//     document.getElementById("travelLocation").value = 'Los Angeles USA';
//     document.getElementById("travelImage").src = imageSrc[5];
//     getRandom();
//     getData();
// }

// function destinationUbud() {
//   removeActive();
//   document.getElementById("ubudBtn").classList.add('bg-gray-700');
//     document.getElementById("travelLocation").value = 'Ubud Indonesia';
//     document.getElementById("travelImage").src = imageSrc[6];
//     getRandom();
//     getData();
// }

// function destinationNewOrleans() {
//   removeActive();
//   document.getElementById("neworleansBtn").classList.add('bg-gray-700');
//   document.getElementById("travelLocation").value = 'New Orleans USA';
//   document.getElementById("travelImage").src = imageSrc[7];
//   getRandom();
//   getData();
// }

// function destinationParis() {
//   removeActive();
//   document.getElementById("parisBtn").classList.add('bg-gray-700');
//   document.getElementById("travelLocation").value = 'Paris France';
//   document.getElementById("travelImage").src = imageSrc[8];
//   getRandom();
//   getData();
// }

// function destinationMarrakesh() {
//   removeActive();
//   document.getElementById("marrakeshBtn").classList.add('bg-gray-700');
//   document.getElementById("travelLocation").value = 'Marrakesh Morocco';
//   document.getElementById("travelImage").src = imageSrc[9];
//   getRandom();
//   getData();
// }
    

// function getRandom() {
//   console.log("getRandom");
//   const randomMonth = Math.floor(Math.random() * month.length);
//   travelMonth = (randomMonth, month[randomMonth]);
//   console.log("getRandom " + travelMonth);
//   document.getElementById("travelMonth").value = travelMonth;
// }
              




//   //API call to Open-Meteo.com to get 3 months of weather data from December 2020 - November 2021, 
//   // Function calculates averages of Max Temp, Min Temp, Rainfall, Snowfall, locations timezone and gets the 45th day's Sunrise and Sunset time.
//   function getWeather() { 
  
  
//     // Calls functions to get seasonal start and end dates for weatherData 
//         // Side note: I probably could have put all of the hemisphere/seasonal date functionality in 1 big function with all of the constants 
//         // but today (Wednesday before Sunday due date), is not the time to be risking disrupting the entire program. If it aint broke...
//     if (hemisphere === "North") {
//       getSeasonDatesNorth();
//     } else {
//       getSeasonDatesSouth();
//     }
  
//     $(document).ready(function () {
//     // Setting URL for API Call, this includes the variables as set in other functions - no API Key is needed for this Historical Weather Data
//       var url =
//         "https://archive-api.open-meteo.com/v1/era5?latitude=" +
//         travelLat +
//         "&longitude=" +
//         travelLong +
//         "&start_date=" +
//         weatherDateStart +
//         "&end_date=" +
//         weatherDateEnd +
//         "&timezone=auto&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,snowfall_sum";
  
//     // Completes API call using URL from above, and returns data as variable "weatherData"
//       $.getJSON(url, function (weatherData) {
  
//         // Setting item to weatherData.daily for simplification of data processing and understanding.
//         var item = weatherData.daily;
  
//         // variables to isolate the 3 months worth of data for eachand store them for calculating the averages
//         var calcMaxTemp = item.temperature_2m_max;
//         var calcMinTemp = item.temperature_2m_min;
//         var calcRainfall = item.rain_sum;
//         var calcSnowfall = item.snowfall_sum;
//         var calcSunrise = item.sunrise;
//         var calcSunset = item.sunset;
//         var timezone = weatherData.timezone;
  
//         // Slicing time down to HH:MM - I set it to use 45th day as a hacky solution for finding the median of the season...
//           // (3 months is ~90 days, 45 is half of 90, big math...)
//             // The better solution would be finding the real median but how much more accurate would that be? Is it worth the time? I think not.
//         var avgSunrise = calcSunrise[45].slice(-5);
//         var avgSunset = calcSunset[45].slice(-5);
  
  
//         // Calculating the averages and stores as a new variable.
//           // Essentially it reduces the array by adding all items together, the total is than divded by the amount of items in the array. 
//         var avgMaxTemp = calcMaxTemp.reduce((a, b) => a + b) / calcMaxTemp.length;
//         var avgMinTemp = calcMinTemp.reduce((a, b) => a + b) / calcMinTemp.length;
//         var avgRainfall = calcRainfall.reduce((a, b) => a + b) / calcRainfall.length;
//         var avgSnowfall = calcSnowfall.reduce((a, b) => a + b) / calcSnowfall.length;
  
  
//         // Setting cleaner named storage variables to be used in the appending process to get data on page.
//         var storeSunrise = avgSunrise;
//         var storeSunset = avgSunset; 
        
//         // Rounding temps to 1 decimal place and rain/snow fall to 2 decimals
//         var storeMaxTemp = avgMaxTemp.toFixed(1);
//         var storeMinTemp = avgMinTemp.toFixed(1);
//         var storeRainfall = avgRainfall.toFixed(2);
//         var storeSnowfall = avgSnowfall.toFixed(2);
  
//         // Getting content on the page
//           // Creating variables with HTML Tags to display the data on page. - "&#8451" is symbol for degrees celcius
//           var maxTemp = $("<h3>").html("Max Temp: " + storeMaxTemp + "&#8451");
//           var minTemp = $("<h3>").html("Min Temp: " + storeMinTemp + "&#8451");
//           var sunrise = $('<p class="topSpace">').html("Sunrise: " + storeSunrise);
//           var sunset = $("<p>").html("Sunset: " + storeSunset);
//           var rainfall = $("<p>").html("Rainfall: " + storeRainfall + "mm");
//           var snowfall = $("<p>").html("Snowfall: " + storeSnowfall + "mm");
//           var timezone = $("<p>").html("Timezone: " + timezone);
  
//           // Appending the HTML variables to the relevant div via the class name
//           $(".containerWeather").append(
//             maxTemp,
//             minTemp,
//             sunrise,
//             sunset,
//             rainfall,
//             snowfall,
//             timezone
//           );
            


//         document.getElementById("infoHider").classList.remove("hidden");
//         document.getElementById("seasonButtons").classList.remove("invisible");

//       });
//     });
//   }
  
  
//   //Finds the travel locations hempishere which is used in Seasonal variables later.
//   function findHemisphere() {
//     console.log("findHemisphere test");
//   // Checks if the latitude of the is above the Equator and sets the variable "hemisphere" to North if it is or South if it is below. 
//   if (travelLat > 0) {
//     (hemisphere = "North"), findSeasonNorth();
//     console.log("Not South");
//   } else {
//     (hemisphere = "South"), findSeasonSouth();
//     console.log("Not north");
//   }
//   }
  
//   // Gets the input month and compares to the Season arrays for Northern Hemisphere.
//   function findSeasonNorth() {
  
//     // converts the month to lower case to ensure it matches the months in arrays which are all lower case
//     var userMonth = travelMonth.toLowerCase();
  
//     // Simple if/elseif/else, loop that compares the month to each of the 4 seasonal arrays.
//     if (northWinter.includes(userMonth)) {
//       travelSeason = "Winter";
//     } else if (northSpring.includes(userMonth)) {
//       travelSeason = "Spring";
//     } else if (northSummer.includes(userMonth)) {
//       travelSeason = "Summer";
//     } else travelSeason = "Autumn";
//   }
  
//   // Gets the input month and compares to the Season arrays for Southern Hemisphere.
//   function findSeasonSouth() {
  
//     // converts the month to lower case to ensure it matches the months in arrays which are all lower case
//     var userMonth = travelMonth.toLowerCase();
  
//     // Simple if/elseif/else Error loop that compares the month to each of the 4 seasonal arrays. 
//     if (southWinter.includes(userMonth)) {
//       travelSeason = "Winter";
//     } else if (southSpring.includes(userMonth)) {
//       travelSeason = "Spring";
//     } else if (southSummer.includes(userMonth)) {
//       travelSeason = "Summer";
//     } else travelSeason = "Autumn";
  
//   }
  
//   // Identifies travel season for Northern Hemisphere and sets the variables "weatherDateStart" and "weatherDateEnd" essential for the API calls in the getWeather function.
//   function getSeasonDatesNorth() {
  
//     // Simple if/elseif/else error, loop that compares the month to each of the 4 seasonal arrays. 
//     if (travelSeason === "Winter") {
//       weatherDateStart = startNorthWinter;
//       weatherDateEnd = endNorthWinter;
//     } else if (travelSeason === "Spring") {
//       weatherDateStart = startNorthSpring;
//       weatherDateEnd = endNorthSpring;
//     } else if (travelSeason === "Summer") {
//       weatherDateStart = startNorthSummer;
//       weatherDateEnd = endNorthSummer;
//     } else {
//       weatherDateStart = startNorthAutumn;
//       weatherDateEnd = endNorthAutumn;
//   }
//   }
  
//   // Identifies travel season for Southern Hemisphere and sets the variables "weatherDateStart" and "weatherDateEnd" essential for the API calls in the getWeather function.
//   function getSeasonDatesSouth() {
//     if (travelSeason === "Winter") {
//       weatherDateStart = startSouthWinter;
//       weatherDateEnd = endSouthWinter;
//     } else if (travelSeason === "Spring") {
//       weatherDateStart = startSouthSpring;
//       weatherDateEnd = endSouthSpring;
//     } else if (travelSeason === "Summer") {
//       weatherDateStart = startSouthSummer;
//       weatherDateEnd = endSouthSummer;
//     } else {
//       weatherDateStart = startSouthAutumn;
//       weatherDateEnd = endSouthAutumn;
//     } 
//   }