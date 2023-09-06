// import React, { Component } from 'react'

// export default class Hoooks extends Component {
//     constructor(props){
//         super(props)
//         this.state=
//         {
//           name:0
//         }
//        console.log(this.state.name)
//     }

//     demo=()=>
//     {                  
//         this.setState
//         ({
//             name:this.state.name+1
//         })
//         console.log(this.state.name)
//     }
//   render() {
//     return (
//       <div>
//         {/* <h2>{this.state.name}</h2> */}
//         <button onClick={this.demo}>Click {this.state.name}</button>
//       </div>
//     )
//   }
// }


import React from 'react'
import { useState } from 'react';

 function Hoooks() {

    const [count,setCount]=useState(0);

    console.log(count)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Count {count}</button>
    </div>
  )
}

export default Hoooks;