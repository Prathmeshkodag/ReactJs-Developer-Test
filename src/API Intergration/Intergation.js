import React, { useEffect, useState } from 'react'
import { API } from './Constant';

export default function Intergation() {
      const [data ,setdata]=useState();
    
      const requestOptions={
        method:'GET',
        redirect:'Folloe',
      }
      const getdata=async()=>{
        const resp=await fetch(API,requestOptions);
        const data=await resp.json();
        setdata(data);
        console.log(data);
      };

      useEffect(()=>{
        getdata()
      },[])
  return (
    <div>
       {data.map((item)=>(
        <ul>
            <li key={item.id}>{item.name}</li>
        </ul>
       ))}
    </div>
  )
}
