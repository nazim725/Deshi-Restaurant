import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';

const Navbar = () => {
    return (
        <div>
             <Slide left cascade>
           
                <nav className="my-4">
                   
                    <Link to="/breakfast"><button className="nav-link-button  fw-bold ">Breakfast</button></Link>
                 
                    <Link to="/lunch"> <button className="nav-link-button fw-bold">Lunch</button></Link>

                    <Link to="/dinner"><button className="nav-link-button fw-bold">Dinner</button></Link>








                </nav>
                </Slide>
           

        </div>
    );
};

export default Navbar;