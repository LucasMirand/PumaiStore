import React from "react"

export const ItemDetail= ({filtro}) => {
    console.log(filtro.id)
    return (
        <>
        <p>{`Detalles producto ${filtro.id}: `} </p>
        <li> {filtro.description} </li>
        </>
    )
  }
  