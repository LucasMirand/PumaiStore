import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import { tarea } from '../Util/Promesas';
import { ItemDetail } from '../Items/ItemDetail';
import { getFirestore } from '../../service/getFirebase';


export const ItemDetailContainer = () => {

  const {idp} = useParams();


  
  const [loading, setLoading] = useState(true)
  const [filtrado, setFiltrado] = useState({})

  console.log(idp)


      useEffect(() => {
        const db = getFirestore()
        const queryDB = db.collection('items');
        queryDB.doc(`${idp}`).get()
        .then((data)=> {
          setFiltrado({id: data.data(), ...data.data()})
          setLoading(false)
          console.log(data.data())  
        })
         
      }, [idp])

  //  console.log(filtrado)

  return (
    <>
     {loading ? <h2>Cargando Detalles...</h2> : <ItemDetail filtrado={filtrado}/>}
    </>
  )
}





