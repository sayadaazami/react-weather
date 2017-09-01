var Axios = require('axios');

const OPEN_WEATHER_KEY = '0c596f80419c4a1dac4a136586ebdea9';
const OPEN_WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=" + OPEN_WEATHER_KEY;

module.exports = {
	getTemp: function(location){
		var encodedLocation = encodeURIComponent(location);
		var url = `${OPEN_WEATHER_URL}&q=${encodedLocation}`;

		return Axios.get(url).then( // return is important to return Promise
			function(res){
				if (res.data.cod &&  res.data.message) {
					throw new Error(res.data.message);	
				}
				else{
					return res.data.name + ': ' + res.data.main.temp;
				}
			},
			function(res){
				throw new Error(res.data.message);
			}
		);
	}
}