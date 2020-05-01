import React, {Component} from 'react';
import Bootstrap, { Carousel, BImg } from 'bootstrap-4-react';

import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';

class CarouselBox extends Component {
    UNSAFE_componentWillMount() {
        window.setTimeout(() => Bootstrap.carousel('#carouselExampleFade'), 2000);
    }

    render() {
        return (
            <Carousel w="100" id="carouselExampleFade" fade>
                <Carousel.Inner>
                    <Carousel.Item active><BImg display="block" w="100" src={slide1} /></Carousel.Item>
                    <Carousel.Item><BImg display="block" w="100" src={slide2} /></Carousel.Item>
                    <Carousel.Item><BImg display="block" w="100" src={slide3} /></Carousel.Item>
                </Carousel.Inner>
                <Carousel.Prev href="#carouselExampleFade">
                    <Carousel.Prev.Icon />
                </Carousel.Prev>
                <Carousel.Next href="#carouselExampleFade">
                    <Carousel.Next.Icon />
                </Carousel.Next>
            </Carousel>
        );
    }
}

export default CarouselBox;