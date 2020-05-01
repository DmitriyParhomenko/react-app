import React, {Component} from 'react';
import {Navbar} from "bootstrap-4-react";

class MobileToggle extends Component {
    render() {
        return (
            <Navbar.Toggler target="#navbarSupportedContent" />
        );
    }
}

export default MobileToggle;