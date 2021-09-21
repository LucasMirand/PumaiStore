import { ItemList } from "./ItemList";
import React, { memo } from 'react'
import './ItemList.css'


export const Items= memo(({items}) => {
  
  //console.log(category)
    /*
      tarea
      .then((resp)=> setItems(resp));
      console.log(items)
      */

   // console.log(equipos.map(equipo=>({id: equipo.id, nombre:equipo.name})));//.map genera otro array
    return (
      
      <div className="Items contenedor">
          {items.map((item)=> <ItemList item={item}/>)}
          
      </div>
    )
  },(oldProps, newProps) => oldProps.items.length === newProps.items.length)
  
