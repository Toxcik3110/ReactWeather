import React from 'react';
import {NavLink} from 'react-router-dom';

class Examples extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h3 className="text-center">Examples</h3>
				<p>Here a few example locations to try out:</p>
				<ol>
					<li><NavLink to='/?location=Philadelphia'>Philadelphia, PA</NavLink></li>
					<li><NavLink to='/?location=Rio'>Rio, Brazil</NavLink></li>
				</ol>
			</div>
		);
	}	
};

export default Examples
