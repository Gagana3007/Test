import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function UseEffectt() {

    const [Count, setCount] = useState(0)
    const [C, setC] = useState(1)
    const [Cal, setCal] = useState(0)
     
  useEffect(() => {
       setCal(()=>Count*2)
  }, [Count])

  // Count will give the Cal value when Count gets updated

  return (
    <div>
      <h4>{Count}</h4>
      <button onClick={()=>setCount(Count+1)}>+</button>
      {/* Hear the count value updates */}
      <h4>{Cal}</h4>

      <h2>{C}</h2>
      <button onClick={()=>setC(C*2)}>*</button>
    </div>
  )
}
