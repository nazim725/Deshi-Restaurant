import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ShowDinner.css'

const UpdateDinner = () => {
    const {dinnerId}=useParams();
    const [dinner,setDinner]=useState({});

    const url = `http://localhost:5000/dinner/${dinnerId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDinner(data)
            })
    }, [])


    const handleUpdateDinner = e => {
        const url = `http://localhost:5000/dinner/${dinnerId}`;
        console.log(url)
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dinner)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setDinner({});
                    
                }
            })
        e.preventDefault();

     
    }

    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedDinner = { name: updatedName, price: dinner.price, img: dinner.img };
        setDinner(updatedDinner)
    }
    const handlePriceChange = e => {
        const updatePrice = e.target.value;
        const updatedDinner = { name: dinner.name, price: updatePrice, img: dinner.img};
        setDinner(updatedDinner)
    }

    const handleImgChange = e => {
        const updateImg = e.target.value;
        const updatedDinner = { name: dinner.name, price: dinner.price, img: updateImg};
        setDinner(updatedDinner)
    }


    return (
        <div className="Update-form">
            <h2 className="my-4">Update Dinner Item</h2>
            <form >
                <input type="text" onChange={handleNameChange} value={dinner.name || ''} /> <br />
                <input type="text" onChange={handlePriceChange} value={dinner.price || ''} /> <br />
                <input type="text" onChange={handleImgChange} value={dinner.img || ''} /> <br />
               
              
                <button className="btn btn-secondary" onClick={handleUpdateDinner}>Update</button>
               


            </form>

            
        </div>
    );
};

export default UpdateDinner;