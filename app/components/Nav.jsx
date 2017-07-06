import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ul>
					<li><NavLink to="/weather" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>React Weather</NavLink></li>
					<li><NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink></li>
					<li><NavLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink></li>
				</ul>
			</div>
		);
	}
}

export default Nav
