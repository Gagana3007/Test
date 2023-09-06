import React from 'react';
import { useState } from 'react';

export default function Exampleee() {

    const [Name, setName]=useState({fName:"", lName:""})
    
  return ( 
    <div>
        <form>
             <input type={"text"} value={Name.fName} onChange={e=>setName({...Name,fName:e.target.value})}/>
             <br/>
             <input type={"text"} value={Name.lName} onChange={e=>setName({...Name,lName:e.target.value})}/>
             {/* <button onClick={()=>setName()}>Ok</button> */}
             <h2>First Name: {Name.fName}</h2>
             <h2>Last Name: {Name.lName}</h2>
             <h2>
              {JSON.stringify(Name)}
             </h2>
        </form>
    </div>
  )

  }
