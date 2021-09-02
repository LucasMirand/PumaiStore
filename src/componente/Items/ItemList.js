import React from 'react'

export const ItemList = ({items}) => {
    
   console.log(items)
    return (
        <ul>
            {items.map((equipo)=> <li key={equipo.id}>{`${equipo.name} pts: ${equipo.puntos}`}</li>)}
        </ul>

    )
}
