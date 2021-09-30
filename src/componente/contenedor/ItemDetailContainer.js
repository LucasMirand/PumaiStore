import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ItemDetail } from '../Items/ItemDetail';
import { getFirestore } from '../../service/getFirebase';


export const ItemDetailContainer = () => {

  const {idp} = useParams();


  
  const [loading, setLoading] = useState(true)
  const [filtrado, setFiltrado] = useState({})




      useEffect(() => {
        const db = getFirestore()
        const queryDB = db.collection('items');
        queryDB.doc(`${idp}`).get()
        .then((data)=> {
          setFiltrado({id: data.data(), ...data.data()})
          setLoading(false)
        })
         
      }, [idp])



  return (
    <>
     {loading ? <h2>Cargando Detalles...</h2> : <ItemDetail filtrado={filtrado}/>}
    </>
  )
}


