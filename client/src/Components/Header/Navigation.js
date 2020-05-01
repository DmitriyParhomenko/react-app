import React, {Component} from 'react';
import {Collapse, Nav, Navbar} from "bootstrap-4-react";
import {Link} from "react-router-dom";
import Search from "./Search";

class Navigation extends Component {
    render() {
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
                        <Link className="nav-link" to="/contacts">Contacts</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/blog">Blog</Link>
                    </Nav.Item>
                </Navbar.Nav>

                <Search />
            </Collapse>
        );
    }
}

export default Navigation;