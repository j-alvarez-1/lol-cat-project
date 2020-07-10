var isPartyTime = false;

var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      // text in the button should read "Party Over"
      // color of the button should be "#0A8DAB" (bonus!)
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      // text in the button should read "PARTY TIME!"
      // color of the button should be "#222" (bonus!)
   }
};
var blockQuoteJS = document.getElementById("timeEvent");
var lolcat = document.getElementById("lolcat");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

if (time == partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME...";
} else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeupTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
    messageText = "Good morning!";
} else if (time > evening) {
    messageText = "Good Evening!";
} else {
    messageText = "Good afternoon!";
}
blockQuoteJS.innerText = messageText;
lolcat.src = image;
var updateClock = function () {
	var showCurrentTime = function()
	{
    // display the string on the webpage
    	var clock = document.getElementById('clock');

    	var currentTime = new Date();

    	var hours = currentTime.getHours();
    	var minutes = currentTime.getMinutes();
    	var seconds = currentTime.getSeconds();
    	var meridian = "AM";

    // Set hours
    	if (hours >= noon)
    	{
       	 meridian = "PM";
    	}
    	if (hours > noon)
    	{
        	hours = hours - 12;
    	}

    // Set Minutes
    	if (minutes < 10)
    	{
        	minutes = "0" + minutes;
    	}

    // Set Seconds
    	if (seconds < 10)
    	{
        	seconds = "0" + seconds;
    	}

    // put together the string that displays the time
    	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    	clock.innerText = clockTime;
	};
	showCurrentTime ();
};
updateClock ();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyButton = document.getElementById("partyTimeButton");
var throwParty = function ()
{
	document.body.style = partyEvent;
};
partyButton.addEventListener("click", throwParty);

// ADDED BELOW `var partyTimeButton`
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

//ADDED BELOW `var partyEvent` function
var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};

var napEvent = function() {
    napTime = napTimeSelector.value;
};

//ADDED BELOW `partyTimeButton` event listener
napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
