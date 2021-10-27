import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="my-4">

                
                <Link to="/breakfast"><button className="nav-link-button  fw-bold ">Breakfast</button></Link>

                <Link  to="/lunch"> <button className="nav-link-button fw-bold">Lunch</button></Link>

                <Link  to="/dinner"><button className="nav-link-button fw-bold">Dinner</button></Link>

              
               
                
            </nav>

        </div>
    );
};

export default Navbar;