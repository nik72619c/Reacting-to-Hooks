import React,{useState,useEffect} from 'react';

const PreDefined=() =>{

    var [count,setCount]=useState(0);
    return (
        <>
        <div>you clicked {count} times</div>
        <button onClick={()=>setCount(count+1)}>click me!</button>
         </>
    )
};

export default PreDefined;