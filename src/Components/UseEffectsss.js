import React from 'react';
import { useState, useEffect } from 'react';

export default function UseEffectsss() {

  const [C, setC] = useState(1)

  const getData=()=>{
   setC(C+6)
  }

  useEffect(() => {
    setC(getData)
  }, 
[]
);


  return (
    <div>
      C={C}
    </div>
  )
}



