import React from 'react';
import { useEffect, useState } from 'react';
import ShowLunchItem from './ShowLunchItem';

const ShowLunch = () => {
    const [lunch, setLunch] = useState([]);


    useEffect(() => {
        fetch('https://morning-reef-83761.herokuapp.com/lunch')
            .then(res => res.json())
            .then(data => {
                setLunch(data)
                console.log(data)
            })
    }, [])


    const handleDeleteLunch = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://morning-reef-83761.herokuapp.com/lunch/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingLunch = lunch.filter(lunch => lunch._id !== id);
                        setLunch(remainingLunch);
                    }
                });
        }
    }
    return (
        <div className='lunch-divider'>
            <h2>Lunch Items</h2>
            <div className="mt-5 pb-5 dinner-container">


                {
                    lunch.map(lunchItem => <ShowLunchItem
                        key={lunchItem._id}
                        lunchItem={lunchItem}
                        handleDeleteLunch={handleDeleteLunch}></ShowLunchItem>)
                }


            </div>

        </div>
    );
};

export default ShowLunch;