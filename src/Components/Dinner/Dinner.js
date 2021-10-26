import React, { useEffect, useState } from 'react';
import DinnerItem from '../DinnerItem/DinnerItem';
import './Dinner.css'

const Dinner = () => {
    const [dinner, setDinner] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/dinner')
            .then(res => res.json())
            .then(data => {
                setDinner(data)
                console.log(data)
            })
    }, [])
    return (
        <div className="dinner-divider">
            <div><h2 className="text-center mt-5">Dinner Items</h2></div>

            <div className=" mt-5 pb-5 dinner-container">


                {
                    dinner.map(dinnerItem => <DinnerItem
                        key={dinnerItem.id}
                        dinner={dinnerItem}></DinnerItem>)
                }


            </div>

        </div>
    );
};

export default Dinner;