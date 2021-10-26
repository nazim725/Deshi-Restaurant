import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateBreakfast = () => {
    const {breakfastId}=useParams();
    const [breakfast,setBreakfast]=useState({});

    const url = `http://localhost:5000/breakfast/${breakfastId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBreakfast(data)
            })
    }, [])


    const handleUpdateBreakfast = e => {
        const url = `http://localhost:5000/breakfast/${breakfastId}`;
        console.log(url)
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(breakfast)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setBreakfast({});
                    
                }
            })
        e.preventDefault();  
    }

    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedDinner = { name: updatedName, price: breakfast.price, img: breakfast.img };
        setBreakfast(updatedDinner)
    }
    const handlePriceChange = e => {
        const updatePrice = e.target.value;
        const updatedDinner = { name: breakfast.name, price: updatePrice, img: breakfast.img};
        setBreakfast(updatedDinner)
    }

    const handleImgChange = e => {
        const updateImg = e.target.value;
        const updatedDinner = { name: breakfast.name, price: breakfast.price, img: updateImg};
        setBreakfast(updatedDinner)
    }



    return (
        <div className="Update-form">
        <h2 className="my-4">Update Dinner Item</h2>
        <form >
            <input type="text" onChange={handleNameChange} value={breakfast.name || ''} /> <br />
            <input type="text" onChange={handlePriceChange} value={breakfast.price || ''} /> <br />
            <input type="text" onChange={handleImgChange} value={breakfast.img || ''} /> <br />
           
          
            <button className="btn btn-secondary" onClick={handleUpdateBreakfast}>Update</button>
           


        </form>

        
    </div>
    );
};

export default UpdateBreakfast;