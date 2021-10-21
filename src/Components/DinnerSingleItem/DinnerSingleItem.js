import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DinnerSingleItem = () => {
    const [dinner,setDinner]=useState({})
    const {dinnerId}=useParams()
    const url=`https://my-json-server.typicode.com/nazim725/Dinner/posts/${dinnerId}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDinner(data))
    },[dinnerId])
    return (
        <div>
            <h2>{dinner.name}</h2>
        </div>
    );
};

export default DinnerSingleItem;