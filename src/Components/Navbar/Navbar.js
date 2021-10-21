import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="mt-3">
              <Link className="me-3 text-decoration-none" to="/breakfast">Breakfast</Link>
              <Link  className="me-3 text-decoration-none"   to="/lunch">Lunch</Link>
              <Link className="text-decoration-none" to="/dinner">Dinner</Link>
            </nav>
            
        </div>
    );
};

export default Navbar;