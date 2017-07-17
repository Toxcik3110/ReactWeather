import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.onSearch = this.onSearch.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {value:''};
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	onSearch(e) {
		e.preventDefault();
		var location = this.state.value;
		if(location.length > 0) {
			var encodedLocation = encodeURIComponent(location);
			this.state.value = '';
			window.location.search='?location=' + encodedLocation;
		}
	}

	render() {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">React weather app</li>
						<li><NavLink to="/weather" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>React Weather</NavLink></li>
						<li><NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink></li>
						<li><NavLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink></li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li>
								<input type="search" placeholder="Search weather by city" value={this.state.value} onChange={this.handleChange} />
							</li>
							<li>
								<input type="submit" className="button" value="Get weather" />
							</li>
						</ul>
					</form>
				</div>
			</div>
		);
	}
}

export default Nav