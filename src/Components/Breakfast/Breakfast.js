import React, { useEffect, useState } from 'react';
import BreakfastItem from '../BrakfastItems/BreakfastItem';
import './Breakfast.css'

const Breakfast = () => {
    const [breakfast,setBreakfast]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/breakfast')
        .then(res=>res.json())
        .then(data=>{
            setBreakfast(data)
           })
    },[])
    return (
       <div>

           <h2 className="text-center mt-5">Breakfast Items</h2>
            <div className="breakfast-container mx-5 mt-5 pb-5">
            {
                breakfast.map(breakfastItem=><BreakfastItem
                    key={breakfastItem.id}
                    breakfast={breakfastItem}></BreakfastItem>)
            }

            
            
        </div>
       </div>
    );
};

export default Breakfast;