import React from 'react'

export const ItemList = ({items}) => {
    
   console.log(items)
    return (
        <ul>
            {items.map((item)=> <li key={item.id}>{`${item.title} $: ${item.price}`}</li>)}
        </ul>

    )
}
