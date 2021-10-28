import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner from '../../Image/deshi.jpg'
import Zoom from 'react-reveal/Zoom';



const Banner = () => {
    return (
        <div className="banner">

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-pic"
                        src={banner}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Zoom left cascade>
                            <h2 className="caption">Deshi Lounge and Restaurant</h2>
                        </Zoom>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-pic"
                        src={banner}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <Zoom left cascade>
                            <h2 className="caption">Deshi Lounge and Restaurant</h2>
                        </Zoom>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-pic"
                        src={banner}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <Zoom left cascade>
                            <h2 className="caption">Deshi Lounge and Restaurant</h2>
                        </Zoom>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>






        </div>
    );
};

export default Banner;