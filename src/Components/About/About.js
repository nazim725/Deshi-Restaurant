import React from 'react';
import './About.css'

import img1 from '../../Image/adult-blur-blurred-background-687824.png'
import img2 from '../../Image/chef-cook-food-33614.png'
import img3 from '../../Image/architecture-building-city-2047397.png'

const About = () => {
    return (
        <div>

            <div>
                <h2 className="text-primary fw-bold ">Why You Choose Us </h2>
                <p>This restaurant is healthy and healthful place in local area.We Provide services to customer in due time.All western ffod item are exist all the time in this restaurant.</p>
            </div>

            <div className="about">
                <div>
                    <img src={img1} alt="" width="300" />
                    <h3 className="text-primary fw-bold">Fast Delivery</h3>
                    <p className="text-success"> <small>The delivery sestem of our Deshi restaurant is exelency.Every customer get their ordered food in due time.Our special stups delivered the orderd food to the home to home delivery.</small></p>
                </div>

                <div>
                    <img src={img2} alt="" width="300" />
                    <h3 className="text-primary fw-bold">A good Auto Responder</h3>
                    <p> <small className="text-success">The delivery sestem of our Deshi restaurant is exelency.Every customer get their ordered food in due time.Our special stups delivered the orderd food to the home to home delivery.</small></p>
                </div>
                <div>
                    <img src={img3} alt="" width="300" />
                    <h3 className="text-primary fw-bold">Home Delivery</h3>
                    <p className="text-success"> <small>The delivery sestem of our Deshi restaurant is exelency.Every customer get their ordered food in due time.Our special stups delivered the orderd food to the home to home delivery.</small></p>
                </div>
            </div>

        </div>
    );
};

export default About;