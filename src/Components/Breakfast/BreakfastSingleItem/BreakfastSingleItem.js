import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BreakfastSingleItem = () => {
let {breakfastId}=useParams()
console.log(breakfastId)

const[breakfast,setBreakfast]=useState({})

const url=`https://my-json-server.typicode.com/nazim725/Breakfast/posts/${breakfastId}`;
console.log(url)


useEffect(()=>{
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
  setBreakfast(data)
  console.log(data)})
},[breakfastId])






 


    return (
        <div>
            <h2>{breakfast.name}</h2>
        </div>
    );
};

export default BreakfastSingleItem;