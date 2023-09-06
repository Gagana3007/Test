import React from 'react';
import { useState } from 'react';

export default function UseSH() {

    const initial=0;
    const [count, setCount] = useState(initial)

    const increment=()=>{
      for(let i=0;i<5;i++)
      {
        setCount(i=>i+1)
      }
    }

    const incrementCount=()=>{
      // for(let i=0;i<9;i++)
      // {
      //   return{
      //     setCount(i=)
      //   }
      // }

      for(let i=0;i<10;i++)
      {
        setCount(p=>p-1)
      }

    }

  return (
    <div>
      <h2>Count&nbsp;:&nbsp;{count}</h2>
        <button onClick={()=>setCount(initial)}>Reset</button>
        &nbsp;
        <button onClick={()=>setCount(count=>count+1)}>Count Increment </button>
        &nbsp;
        <button onClick={()=>setCount(count=>count-1)}>Count Decrement </button>
        &nbsp;
        <button onClick={increment}>Increment 5 </button>
        &nbsp;
        <button onClick={incrementCount}> Decrement </button>

    </div>
  )
}
