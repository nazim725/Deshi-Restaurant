import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="my-4">

                <button className=" bg-success  w-25 p-4 mt-3 border me-4 rounded rounded-3"><Link className=" text-white text-decoration-none fw-bold " to="/breakfast">Breakfast</Link></button>
               <button className="bg-success text-white w-25 p-4 mt-3  me-4  border rounded rounded-3"> <Link className="text-white text-decoration-none fw-bold " to="/lunch">Lunch</Link></button>
               <button className="bg-success text-white w-25 p-4 mt-3 border rounded rounded-3"> <Link className="text-decoration-none text-white fw-bold " to="/dinner">Dinner</Link></button>
                
            </nav>

        </div>
    );
};

export default Navbar;