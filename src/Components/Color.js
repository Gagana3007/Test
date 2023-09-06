import React from 'react'
import { useState } from 'react'

export default function Color() {

    // const [color, setcolor] = useState("Red")
    // console.log(color)

    const [name, setName]=useState({
        fName:"Gaganarpitha",
        lName:"V",
        company:"Capgemini",
        Domain:"FullStack"
    })

    const [colors, setcolors]=useState({
     color: "red",
     thing:"car"
    })

    // Previous State is used to update the array of useState the particular data
    const updateName=()=>
    {
        setName(
            pState=>{
              return  {...pState, fName:"Gagana", company:"IBM"}
            }
        )
    }

    const updateColor=()=>{
      setcolors(
        pstate => {
       return { ...pstate,  color:"Green"} 
        }
        
      )
    }
  return (
    <div>
        {/* <h2   style={{color:"Blue"}}>{color}</h2>
<button onClick={(e)=>setcolor("Blue")} style={{color:"Darkblue"}}>Blue</button> */}

<h3>{name.fName} {name.lName} {name.company} {name.Domain}</h3>
<button onClick={updateName}>OK</button>
<h4 >My Fav color {colors.color} {colors.thing}</h4>
<button onClick={updateColor}>Ok</button>

{/* <button onClick={()=>setName()}>Ok</button> */}
      
    </div>
  )
}
