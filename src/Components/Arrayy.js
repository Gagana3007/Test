import React from 'react'

export default function Arrayy() {

    const [items, setitems] = useState([])

    const addItem=()=>{
        setitems({
            id:"1",
            Name:"Gagana",
            
        })
    }

  return (
    <div>
      <h2 onChange={addItem}>
        {items.id} and {items.Name}
      </h2>
    </div>
  )
}
