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

// Now safe to use device APIs
document.addEventListener('deviceready', function () {
	alert('CARICAMENTO TERMINATO');
    // Android customization 
    cordova.plugins.backgroundMode.setDefaults({ text:'Doing heavy tasks.'});
    // Enable background mode 
    cordova.plugins.backgroundMode.enable();
 
    // Called when background mode has been activated 
    cordova.plugins.backgroundMode.onactivate = function () {
    	alert("bg attivo");
        setInterval(function () {
            // Modify the currently displayed notification 
            vat d=new Date();
            document.getElementById("test_div").innerHTML += d.toTimeString()+"<br/>";
            cordova.plugins.backgroundMode.configure({
                text:'Running in background for more than 5s now.'
            });
        }, 5000);
    }
});
    


	

