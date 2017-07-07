import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './Nav';
import Weater from './Weather';
import About from './About';
import Examples from './Examples';


class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<div>
					<Nav />
					<div className="grid-x grid-margin-x">
						<div className="auto cell"></div>
						<div className="medium-6 large-4 cell">
							<Route exact path='/' component={Weater} />
							<Route path='/weather' component={Weater} />
							<Route path='/about' component={About} />
							<Route path='/examples' component={Examples} />
						</div>
						<div className="auto cell"></div>
					</div>
				</div>
			</Router>
		);
	}	
};

export default Main
