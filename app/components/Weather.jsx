import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from 'openWeatherMap';
var ErrorModal = require('ErrorModal');

class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = {location:'Miami', temp:88, isLoading:false, errorMessage:undefined};
		this.handleSearch = this.handleSearch.bind(this);
	}

	// getInitialState() {
	// 	return {
	// 		isLoading: false,
	// 	};
	// }

	componentDidMount() {

	}

	handleSearch(location) {
		var that = this;
		that.setState({
			isLoading:true,
			errorMessage: undefined,
		});
		openWeatherMap.getTemp(location).then(function(temp) {
			that.setState({
				location:location,
				temp:temp,
				isLoading: false,
			});
		}, function(e) {
			that.setState({
				isLoading:false,
				errorMessage: e.message,
			});
		});
	}

	render() {
		var {temp, location, isLoading, errorMessage} = this.state;

		function renderMessage() {
			if(isLoading) {
				return <h3 className="text-center">Fetching the weather...</h3>;
			} else if (temp && location){
				return <WeatherMessage temp={temp} location={location}/>;
			}
		}

		function renderError() {
			if(typeof errorMessage === 'string') {
				return <ErrorModal message={errorMessage}/>;
			}
		}

		return (
			<div>
				<h1 className="text-center page-title">Get the weather</h1>
				<WeatherForm onSearch={this.handleSearch} />
				{renderMessage()}
				{renderError()}
			</div>
		);
	}	
};

export default Weather
