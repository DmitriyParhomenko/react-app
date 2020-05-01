import React, {Component} from 'react';
import {BImg, Navbar} from "bootstrap-4-react";

class Logo extends Component {
    render() {
        const bootstrap_icon = 'https://im0-tub-by.yandex.net/i?id=1535abd0e750bbf34375232a46ca90db&n=13';

        return (
            <Navbar.Brand href="#">
                <BImg
                    src={bootstrap_icon}
                    width="30"
                    height="30"
                    display="inline-block"
                    align="top"
                    mr="1"
                />
                Tiger
            </Navbar.Brand>
        );
    }
}

export default Logo;