function weatherClass () {}

weatherClass.prototype.create = function() {
	
	console.log("Weather Class is running");

}

var weather = new weatherClass;
weather.create();

console.log(weather);