import React, { Component } from 'react';
import NavBar from "./NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from '../../pages/Home';
import Blog from '../../pages/Blog';
import Contacts from '../../pages/Contacts';
import About from '../../pages/About';
import Tracker from "../../pages/Tracker";

class Header extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/blog">
                            <Blog />
                        </Route>
                        <Route path="/tracker">
                            <Tracker />
                        </Route>
                        <Route path="/contacts">
                            <Contacts />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Header;