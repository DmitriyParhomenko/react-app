import React, {Component} from 'react';
import CarouselBox from "../Components/Main/CarouselBox";
import CardFeatures from "../Components/Home/CardFeatures";

class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox />
                <CardFeatures />
            </div>
        );
    }
}

export default Home;