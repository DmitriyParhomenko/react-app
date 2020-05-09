import React, {Component} from 'react';
import {Container, Navbar} from 'bootstrap-4-react';
import NavigationTracker from './NavBar/NavigationTracker';


class NavBar extends Component {
	render() {
		return (
			<Navbar sticky="top" expand="lg" light bg="light">
				<Container>
					<NavigationTracker />
				</Container>
			</Navbar>
		);
	}
}

export default NavBar;