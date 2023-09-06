import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Time() {

    const [count, setcount] = useState(0)
    const [cal, setcal] = useState(0)

    useEffect(() => {
   let timer=setTimeout(() => {
        setcount(count=>count+1)
   }, 1000);
//    (
//             ()=>
//             {
//                 setcount(count=>count+1)
//             }, 1000
//         )
        // setcal(()=>count*2);
        // return () => clearTimeout(timer)

    },[])
  return (
    <div>
      <h2>{count}</h2>
      {/* <button onClick={()=>setcount(count=>count+1)}>ADD</button>
      <p>{cal}</p> */}
    </div>
  )
}
