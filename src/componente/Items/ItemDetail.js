import React from "react"

export const ItemDetail= ({product}) => {
    console.log(product)
    return (
        <>
        <p>{`Detalles producto ${product}: `} </p>
        <li> {product.title} </li>
        </>
    )
}