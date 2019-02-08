import React,{useState,useEffect,useContext,useReducer} from 'react';
let initialState={
    counter:0
}
function reducer(state=initialState,action){
  switch(action.type){
    case 'increment': return {counter: state.counter+1};
    break;
    case 'decrement': return {counter: state.counter-1};
    break;
    default: return {status: 'not defined'}
    break;
  }
}

const PreDefined=() =>{
    var [state,dispatch]=useReducer(reducer,initialState);
    console.log('state', state);
    console.log('dispatch',dispatch);

    var [count,setCount]=useState(0);
    var [count2,setCount2]=useState(0);
    console.log(useContext(React.createContext('default')));
    useEffect(()=>{
        document.title=` count1: ${count} count2: ${count2} times`;
        // console.log(React.createContext('none'));
        // console.log(useContext(React.createContext('default')));
        return function cleanUp(){
            console.log('component unmounted!');

        };
    },[count,count2]);
    return (
        <>
        <div>you clicked {count} times</div>
        Count: {state.counter}
        <button onClick={()=>setCount(count+1)}>click me!</button>
        <button onClick={()=>setCount2(count2+1)}>click me 2!</button>
        <button onClick={()=>dispatch({type: 'increment'})}>+</button>
        <button onClick={()=>dispatch({type: 'decrement'})}>-</button>
         </>
    )
};

export default PreDefined;