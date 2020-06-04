import React, { Component } from 'react';
import NavBar from './NavBar';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import PrivateRouter from '../../Hocs/PrivateRoute';
import UnPrivateRouter from '../../Hocs/UnPrivateRoute';

import Home from '../../pages/Home';
import Blog from '../../pages/Blog';
import Contacts from '../../pages/Contacts';
import About from '../../pages/About';
import Tracker from '../../pages/Tracker';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Todos from '../../pages/Todos';
import Admin from '../../pages/Admin';

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
				<UnPrivateRouter path="/login" component={Login} />
				<UnPrivateRouter path="/register" component={Register} />
				<PrivateRouter path="/todos" roles={['user','admin']} component={Todos} />
				<PrivateRouter path="/admin" roles={['admin']} component={Admin} />
			</Router>
		);
	}
}

export default Header;