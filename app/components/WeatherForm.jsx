import React from 'react';

class WeatherForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {value:''}

		this.handleChange = this.handleChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}	

	onFormSubmit(e) {
		e.preventDefault();
		var location = this.state.value;
		if(location.length > 0) {
			this.props.onSearch(location);
		}
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" value={this.state.value} placeholder="Enter the city" onChange={this.handleChange} />
					<input type="submit" className="expanded hollow button" value="Get weather" />
				</form>
			</div>
		);
	}	
};

export default WeatherForm
