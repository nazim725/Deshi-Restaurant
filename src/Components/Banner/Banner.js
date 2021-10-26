import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner from '../../Image/deshi.jpg'



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
                    <h2 className="caption">Deshi Lounge and Restaurant</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-pic"
                        src={banner}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h2 className="caption">Deshi Lounge and Restaurant</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-pic"
                        src={banner}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h2 className="caption">Deshi Lounge and Restaurant</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>






        </div>
    );
};

export default Banner;