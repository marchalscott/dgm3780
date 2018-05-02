// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);


var app = {
	initialize: function() {
		this.bindEvents();
	}

//bindEvents: function() {
	//document.addEventListener("deviceready", this.onDeviceReady, false);
//}

//onDeviceReady: function() {
	//app.receivedEvent('deviceready');
	//window.addEventListener("batterystatus", onBatteryStatus, false);
	//console.log();
//},

//receivedEvent: function(id) {
	//var parentElement = document.getElementById(id);
	//var listeningElement = parentElement.querySelector('.listening');
	//var receivedElement = prentElement.querySelector('.received');

	//listeningElement.setAttribute('style', 'display:none');
	//receivedElement.setAttribute('style', 'display:none');
//}

window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(status) {
    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
}
}