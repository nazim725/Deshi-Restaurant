import React from 'react';
import { useEffect, useState } from 'react';
import ShowBreakfastItem from './ShowBreakfastItem';

const ShowBreakfast = () => {

    const [breakfast, setBreakfast] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/breakfast')
            .then(res => res.json())
            .then(data => {
                setBreakfast(data)
                console.log(data)
            })
    }, [])


    const handleDeleteBreakfast = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/breakfast/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingBreakfast = breakfast.filter(breakfast => breakfast._id !== id);
                        setBreakfast(remainingBreakfast);
                    }
                });
        }
    }
    return (
        <div>
            <div className="mx-5 mt-5 pb-5 dinner-container">


                {
                   

                    breakfast.map(breakfastItem=><ShowBreakfastItem 
                    key={breakfastItem._id}
                    breakfastItem={breakfastItem}
                    handleDeleteBreakfast={handleDeleteBreakfast} ></ShowBreakfastItem>)
                }


            </div>

        </div>
    );
};

export default ShowBreakfast;