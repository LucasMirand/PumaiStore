import React from "react"

export const ItemDetail= (filtro) => {
    console.log(filtro.category)
    return (
        <>
        <p>{`Detalles producto ${filtro.id}: `} </p>
        <li> {filtro.descrption} </li>
        </>
    )
  }
  