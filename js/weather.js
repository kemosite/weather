function weatherClass () {}

weatherClass.prototype.create = function() {
	
	console.log("Weather Class is running");

	weatherClass.prototype.xmlhttp = new XMLHttpRequest();
	weatherClass.prototype.xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        weatherClass.prototype.json_response = JSON.parse(this.responseText);
	    }
	};
	weatherClass.prototype.xmlhttp.open("GET", "js/connect-to-weather-api.php", true);
	weatherClass.prototype.xmlhttp.send();

}

var weather = new weatherClass;
weather.create();

console.log(weather);