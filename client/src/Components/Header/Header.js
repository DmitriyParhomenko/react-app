import React, { Component } from 'react';
import NavBar from './NavBar';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import Home from '../../pages/Home';
import Blog from '../../pages/Blog';
import Contacts from '../../pages/Contacts';
import About from '../../pages/About';
import Tracker from '../../pages/Tracker';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

class Header extends Component {
	render() {
		return (
			<Router>
				<NavBar />
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/blog" component={Blog} />
				<Route path="/tracker" component={Tracker} />
				<Route path="/contacts" component={Contacts} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
			</Router>
		);
	}
}

export default Header;