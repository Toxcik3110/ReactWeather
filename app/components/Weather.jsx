import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from 'openWeatherMap';

class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = {location:'Miami', temp:88};
		this.handleSearch = this.handleSearch.bind(this);
	}

	componentDidMount() {

	}

	handleSearch(location) {
		var that = this;
		openWeatherMap.getTemp(location).then(function(temp) {
			that.setState({
				location:location,
				temp:temp
			});
		}, function(errorMessage) {
			alert(errorMessage);
		});
	}

	render() {
		var {temp, location} = this.state;
		return (
			<div>
				<h3>Weather Component</h3>
				<WeatherForm onSearch={this.handleSearch} />
				<WeatherMessage temp={temp} location={location} />
			</div>
		);
	}	
};

export default Weather
