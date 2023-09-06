import React from 'react'
import { useState } from 'react'

export default function UseS() {

const [current, setcurrent] = useState("Gagana")
    
  return (
    <div>
      <h4>{current}</h4>
      <button onClick={()=>setcurrent("Gaganarpitha V")}>Change</button>
    </div>
  )
}