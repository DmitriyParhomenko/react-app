import React, {Component} from 'react';
import {Nav, Navbar} from 'bootstrap-4-react';
import {Link} from 'react-router-dom';

class NavigationTracker extends Component {
	render() {
		return (
			<div>
				<Navbar.Nav mr="auto">
					<Nav.Item>
						<Link className="nav-link" to="/exercises">ExcerTracker</Link>
					</Nav.Item>
					<Nav.Item>
						<Link className="nav-link" to="/create">Create Exercises Log</Link>
					</Nav.Item>
					<Nav.Item>
						<Link className="nav-link" to="/user">Create User</Link>
					</Nav.Item>
				</Navbar.Nav>
			</div>
		);
	}
}

export default NavigationTracker;