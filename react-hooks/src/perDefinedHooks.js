import React,{useState,useEffect} from 'react';

const PreDefined=() =>{

    var [count,setCount]=useState(0);
    var [count2,setCount2]=useState(0);

    useEffect(()=>{
        document.title=` count1: ${count} count2: ${count2} times`;
        return function cleanUp(){
            console.log('component unmounted!');
        };
    },[count,count2]);
    return (
        <>
        <div>you clicked {count} times</div>
        <button onClick={()=>setCount(count+1)}>click me!</button>
        <button onClick={()=>setCount2(count2+1)}>click me 2!</button>
         </>
    )
};

export default PreDefined;