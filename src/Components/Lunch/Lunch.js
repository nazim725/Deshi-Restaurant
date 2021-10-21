import React, { useEffect, useState } from 'react';
import LunchItem from '../LunchItem/LunchItem';
import './Lunch.css'

const Lunch = () => {

    const [lunch,setLunch]=useState([])
    useEffect(()=>{
        fetch('./Lunch.json')
        .then(res=>res.json())
        .then(data=>{
            setLunch(data)
            console.log(data)})
    },[])
    return (
       <div>
           <div><h2 className="text-center mt-5">Lunch Items</h2></div>
           
           <div className="mx-5 mt-5 pb-5 lunch-container">

            
            {
                lunch.map(lunchItem=><LunchItem
                    key={lunchItem.id}
                    lunch={lunchItem}></LunchItem>)
            }


           </div>
       </div>
    );
};

export default Lunch;