import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const LunchSingleItem = () => {
    const [lunch,setLunch]=useState({})
    const {lunchId}=useParams();
    const url=`https://my-json-server.typicode.com/nazim725/Lunch/posts/${lunchId}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setLunch(data))
    },[lunchId])
    return (
        <div>
            <h2>{lunch.name}</h2>
        </div>
    );
};

export default LunchSingleItem;