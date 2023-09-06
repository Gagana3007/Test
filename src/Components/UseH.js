import React from 'react'
import { useState, useEffect } from 'react'

export default function UseH() {

  const [c, setC] = useState(0)
  const [Name, setName] = useState("Gagana V")

  useEffect(() => {
   setTimeout(() => {
    setC(c+2)
   }, 1000)
},[])

useEffect(()=>{
  setName("Gaganarpitha V")
}
)

  return (
    <div>
      <h1>counts==={c}</h1>
      
      <h4>{Name}</h4>
    </div>
  )
}
