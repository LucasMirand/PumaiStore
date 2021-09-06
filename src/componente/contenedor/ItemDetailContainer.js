import { useState, useEffect } from 'react'
import { ItemDetail } from '../Items/ItemDetail'

export const ItemDetailContainer = ({idP}) => {

    const [filtro, setFiltro] = useState([])
    
    useEffect(() => {     
        setTimeout(() => {
            fetch( `https://fakestoreapi.com/products/${idP}`)
            .then(resp=>resp.json())
            .then(jsons=>setFiltro(jsons))
        }, 2003); 
    },[])
    console.log(filtro)

    return (
        <div><ItemDetail filtro={filtro}/></div>
    )

}