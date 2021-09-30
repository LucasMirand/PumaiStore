import Container from 'react-bootstrap/Container'
import { ItemList } from '../Items/ItemList';
import { useParams } from 'react-router-dom'; //Permite capturar Variables dinamicas
import React, { useState, useEffect } from 'react'
import './ILC.css' 
import { FaSpinner } from 'react-icons/fa';
import { getFirestore } from '../../service/getFirebase';

//Titulo de la Tienda
export const ItemListContainer= ({titulo}) => {


    const styles = {
      color: 'green'
    }
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {cat} = useParams();

  useEffect(() => {
      const db = getFirestore()
      const queryDB = db.collection('items')
      const cQuery = cat ?
          queryDB.where('categoryId','==',cat)
        :
          queryDB

      cQuery.get()
        .then(data=> {
          if(data.size !== 0){
          setItems(data.docs.map(item => ({id: item.id,...item.data()})))
          setLoading(false)}
        })              
    },[cat])



    return (    
      <>
        <Container>
          <h1 style={styles} >{titulo}</h1>
        
        </Container>
        <Container>
        {loading ? <><h2>Cargando productos</h2><FaSpinner icon="spinner" className="spinner"></FaSpinner> </> : <ItemList items={items}/>}  
        
        </Container>
      </>
    )
}

