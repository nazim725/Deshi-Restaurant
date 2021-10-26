import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'

const Admin = () => {
    return (
        <div className="my-5">
            <h1 className="text-primary fw-bold">Food Management</h1>
            <h5 className="text-success mb-4">Deshi Restaurant</h5>
            <div className="admin">
            <Link to='/addBreakfast'><button className="btn btn-primary">Add BreakFast Item</button></Link>
            <Link to='/addLunch'><button className="btn btn-primary ">Add Lunch Item</button></Link>
            <Link to='/addDinner'><button className="btn btn-primary">Add Dinner Item</button></Link>
            <Link to='/ShowDinner'><button className="btn btn-primary"> Dinners</button></Link>
            <Link to='/ShowBreakfast'><button className="btn btn-primary"> Breakfast</button></Link>
            <Link to='/ShowLunch'><button className="btn btn-primary"> Lunch</button></Link>

        </div>
        </div>
    );
};

export default Admin;