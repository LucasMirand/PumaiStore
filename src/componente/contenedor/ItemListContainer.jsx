import Container from 'react-bootstrap/Container'
import { ItemList } from '../Items/ItemList';
import { useParams } from 'react-router-dom'; //Permite capturar Variables dinamicas
//import { tarea } from "../Util/Promesas";
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
/*
  useEffect(() => {
      const db = getFirestore()
      const queryDB = db.collection('items')
<<<<<<< HEAD
      if (cat === undefined){
        queryDB.get()
        .then(data=> {
          setItems(data.docs.map(item => ({id: item.id,...item.data()})))
          setLoading(false)
        })
      }else{
        queryDB.where('categoryId','==',cat).get()
=======
      const cQuery = cat ?
          queryDB.where('categoryId','==',cat)
        :
          queryDB

      cQuery.get()
>>>>>>> Class13
        .then(data=> {
          if(data.size !== 0){
          setItems(data.docs.map(item => ({id: item.id,...item.data()})))
<<<<<<< HEAD
          setLoading(false)
          })          
      }        
  },[cat])
*/
  useEffect(()=> {
    const db = getFirestore()
    const queryDB = db.collection('items')

    const conditionQuery = cat ?
        queryDB.where('categoryId','==', cat)
      :
        queryDB

    conditionQuery.get()
    .then(data => {
      if (data.size===0) {
        console.log('Vacio')
      }
      setLoading(false)
      setItems(data.docs.map(item => ({id: item.data().id, ...item.data()})))
      console.log(cat)
    })
=======
          setLoading(false)}
        })              
    },[cat])
>>>>>>> Class13

    
  },[cat])


    /*
    useEffect(() => {
          if(cat===undefined){
            tarea
            .then((resp)=> {
              setItems(resp)
              setLoading(false)})
          } else {tarea
            .then((resp)=> {
              setItems(resp.filter(r => cat === r.category))
              setLoading(false)
            })}
    }, [cat]) 
    */
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

//EJEMPLOS EXTRAS

//Cuerpo de la tienda
/*
export function Cuerpo() {
  return (
    <>
      <p>Este es el cuerpo</p>
    </>
  )
} */

//Relleno-Prueba
/*
export function Input() {
  const [count, setCount] = useState(1)
  const sumador = () =>{
    if (count <10){
    setCount(count +1);}
  }
  const restar = () => {
    if (count > 1) setCount(count -1)
  }
  const agregar = () => {
    console.log(`usted agregó ${count} items`)
  }
  
  return (
    <>
      <div className="Input">
        <p>Contador </p> 
        <Container>
          <button onClick={sumador}>+</button>
          <label>{count}</label>
          <button onClick={restar}>-</button>
        </Container>
        <button onClick={agregar} >Agregar al carrito</button>
      </div>
    </>
  )
}
*/