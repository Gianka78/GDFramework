// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}
function log(s){
	document.getElementById("test_div").innerHTML = document.getElementById("test_div").innerHTML + s + "<br/>";
	    	
}
function onLoad() {
	log("onload");
	document.addEventListener('deviceready', function () {
		log("deviceReady");
	    	cordova.plugins.backgroundMode.setDefaults({ text:'Doing heavy tasks.'});
	    	log("defaults");
	    	cordova.plugins.backgroundMode.enable();
		log("enable");
	    	cordova.plugins.backgroundMode.onactivate = function () {
		    	log("activate");
		    	setInterval(function () {
		            var d=new Date();
		            log("" + d.toTimeString());
		            cordova.plugins.backgroundMode.configure({
		                text:'Running in background for more than 5s now.'
		            });
		        }, 5000);
		}
	});
}
