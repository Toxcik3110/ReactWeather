import React from 'react';

class WeatherMessage extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		// var {temp, location} = this.props;
		return (
			<div>
				<h3 className="text-center">It is it {this.props.temp} in {this.props.location}.</h3>
			</div>
		);
	}	
};

export default WeatherMessage
