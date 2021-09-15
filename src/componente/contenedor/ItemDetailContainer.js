import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { tarea } from '../Util/Promesas';
import { ItemDetail } from '../Items/ItemDetail';

export const ItemDetailContainer = () => {

  const {idp} = useParams();

  let indice = parseInt(idp)
  
  const [loading, setLoading] = useState(true)
  const [filtrado, setFiltrado] = useState({})




    useEffect(() => {
          if(indice!==undefined){
            tarea
            .then((resp)=> {
              setFiltrado(resp.find(r => indice === r.id))
              setLoading(false)
              })} 
              //guardar en el estado
    }, [indice])
    console.log(filtrado)

  return (
    <>
     {loading ? <h2>Cargando Detalles...</h2> : <ItemDetail filtrado={filtrado}/>}
    </>
  )
}





