import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateLunch = () => {
    const { lunchId } = useParams()
    const [lunch, setLunch] = useState({})



    const url = `http://localhost:5000/lunch/${lunchId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLunch(data)
            })
    }, [])


    const handleUpdateLunch = e => {
        const url = `http://localhost:5000/lunch/${lunchId}`;
        console.log(url)
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(lunch)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setLunch({});

                }
            })
        e.preventDefault();
    }



    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedLunch = { name: updatedName, price: lunch.price, img: lunch.img };
        setLunch(updatedLunch)
    }
    const handlePriceChange = e => {
        const updatePrice = e.target.value;
        const updatedLunch = { name: lunch.name, price: updatePrice, img: lunch.img };
        setLunch(updatedLunch)
    }

    const handleImgChange = e => {
        const updateImg = e.target.value;
        const updatedLunch = { name: lunch.name, price: lunch.price, img: updateImg };
        setLunch(updatedLunch)
    }
    return (
        <div className="Update-form">
            <h2 className="my-4">Update Lunch Item</h2>
            <form >
                <input type="text" onChange={handleNameChange} value={lunch.name || ''} /> <br />
                <input type="text" onChange={handlePriceChange} value={lunch.price || ''} /> <br />
                <input type="text" onChange={handleImgChange} value={lunch.img || ''} /> <br />


                <button className="btn btn-secondary" onClick={handleUpdateLunch}>Update</button>



            </form>


        </div>
    );
};

export default UpdateLunch;