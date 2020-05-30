import React, {Component, useContext} from 'react';
import {Collapse, Nav, Navbar, Button} from 'bootstrap-4-react';
import {Link} from 'react-router-dom';
import AuthService from '../../Context/AuthContext';
import { AuthContext } from '../../Context/AuthContext';
import Search from './Search';

const Navigation = prop => {
	const {isAuthenticated, user, setIsAuthenticated, setUser} = useContext(AuthContext);

	const onClickLogoutHandler = () => {
		AuthService.logout().then(data => {
			if(data.success) {
				setUser(data.user);
				setIsAuthenticated(false);
			}
		});
	};

	const unauthenticatedNavBar = () => {
		return (
			<>
				<Nav.Item>
					<Link className="nav-link" to="/login">Login</Link>
				</Nav.Item>
				<Nav.Item>
					<Link className="nav-link" to="/register">Register</Link>
				</Nav.Item>
			</>
		);
	};

	const authenticatedNavBar = () => {
		return (
			<div>
				<Link className="nav-link" to="/todos">Todos</Link>
				{
					user.role === 'admin' ?
						<Link className="nav-link" to="/admin">Admin</Link> : null
				}
				<Button outline dark my="2 sm-0" onClick={onClickLogoutHandler}>Logout</Button>
			</div>
		);
	};

	return (
		<Collapse navbar id="navbarSupportedContent">
			<Navbar.Nav mr="auto">
				<Nav.Item>
					<Link className="nav-link" to="/">Home</Link>
				</Nav.Item>
				<Nav.Item>
					<Link className="nav-link" to="/about">About us</Link>
				</Nav.Item>
				<Nav.Item>
					<Link className="nav-link" to="/blog">Blog</Link>
				</Nav.Item>
				<Nav.Item>
					<Link className="nav-link" to="/tracker">Tracker</Link>
				</Nav.Item>
				<Nav.Item>
					<Link className="nav-link" to="/contacts">Contacts</Link>
				</Nav.Item>
				{ !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar() }
			</Navbar.Nav>

			<Search />
		</Collapse>
	);
};

export default Navigation;