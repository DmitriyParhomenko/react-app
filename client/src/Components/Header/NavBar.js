import React, {Component} from 'react';
import {Container, Navbar} from "bootstrap-4-react";
import Logo from "./Logo";
import MobileToggle from "./MobileToggle";
import Navigation from "./Navigation";

class NavBar extends Component {
    render() {
        return (
            <Navbar sticky="top" expand="lg" light bg="light">
                <Container>
                    <Logo />
                    <MobileToggle />
                    <Navigation />
                </Container>
            </Navbar>
        );
    }
}

export default NavBar;