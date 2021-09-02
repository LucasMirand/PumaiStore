import { ItemList } from "./ItemList";
import React, { useState, useEffect } from 'react'


const equipos = [
    { id:1, name:"river", puntos:30},
    { id:2, name:"boca", puntos:27},
    { id:3, name:"belgrano", puntos:20},
    { id:4, name:"tigre", puntos:12},
    { id:5, name:"aldosivi", puntos:15},
    { id:6, name:"racing", puntos:22},
    { id:7, name:"independiente", puntos:18}
  ];

let tarea = new Promise((res,rej) =>{
  //res(getEquipos())
    setTimeout(() => {
      res(equipos)
    }, 2000);
})

export const Items= () => {
    const [items, setItems] = useState([])
    useEffect(() => {    
      tarea
      .then((resp)=> setItems(resp));
      console.log(items)
    },)
   // console.log(equipos.map(equipo=>({id: equipo.id, nombre:equipo.name})));//.map genera otro array
    return (
      <div className="Items">
          <ItemList items={items}/>
      </div>
    )
  }
  
