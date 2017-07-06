import axios from 'axios';

const OPEN_WEATHER_MAP_API = 'http://samples.openweathermap.org/data/2.5/weather?appid=a141027f7a458d0b3b387f5ae63d0f86';

//a141027f7a458d0b3b387f5ae63d0f86

export default class {
	static getTemp(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_API}&q=${encodedLocation}`;

		// return fetch(requestUrl)
		// 	.then(function(response) {  
		// 		console.log(response);
		// 		return response.text();  
		// 	})
		// 	.then(function(text) {  
		// 		console.log(text);
		// 		return text;
		// 	})  
		// 	.catch(function(error) {  
		// 		throw new Error('Request failed ' + error);
		// 	});

		return axios.get(requestUrl).then(function(res) {
			if(res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function(res) {
			throw new Error(res.data.message);
		});
	}
}