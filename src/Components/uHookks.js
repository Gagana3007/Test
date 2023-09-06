import React from 'react'
import { useState } from 'react';

 function uCounts() {

    const [count, setCount]=useState();

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Count {count}</button>
    </div>
  )
}

export default uCounts;
