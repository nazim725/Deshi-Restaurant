import React from 'react';
import { useEffect, useState } from 'react';
import ShowLunchItem from './ShowLunchItem';

const ShowLunch = () => {
    const [lunch, setLunch] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/lunch')
            .then(res => res.json())
            .then(data => {
                setLunch(data)
                console.log(data)
            })
    }, [])


    const handleDeleteLunch = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/lunch/${id}`;
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
        <div>

            <div className="mx-5 mt-5 pb-5 dinner-container">


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