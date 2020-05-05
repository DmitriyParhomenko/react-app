import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return (
			<nav>
				<Link to="/exercises">ExcerTracker</Link>
				<ul>
					<li>
						<Link to="/exercises">exercises</Link>
					</li>
					<li>
						<Link to="/create">Create Exercises Log</Link>
					</li>
					<li>
						<Link to="/user">Create User</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default NavBar;