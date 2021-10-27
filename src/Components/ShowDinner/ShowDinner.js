import React, { useEffect, useState } from 'react';
import ShowDinnerItem from './ShowDinnerItem';

const ShowDinner = () => {
    const [dinner, setDinner] = useState([])
    useEffect(() => {
        fetch('https://morning-reef-83761.herokuapp.com/dinner')
            .then(res => res.json())
            .then(data => {
                setDinner(data)
                console.log(data)
            })
    }, [])


    const handleDeletDinner = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://morning-reef-83761.herokuapp.com/dinner/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaininDinner = dinner.filter(dinner => dinner._id !== id);
                        setDinner(remaininDinner);
                    }
                });
        }
    }
    return (
        <div className="dinner-divider">
            <h2>Dinner Items</h2>
            <div className="mt-5 pb-5 dinner-container">


                {
                    dinner.map(dinnerItem => <ShowDinnerItem
                        key={dinnerItem._id}
                        dinnerItem={dinnerItem}
                        handleDeletDinner={handleDeletDinner}></ShowDinnerItem>)
                }


            </div>

        </div>
    );
};

export default ShowDinner;