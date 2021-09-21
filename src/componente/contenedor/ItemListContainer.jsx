//import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import { Items } from '../Items/Items';
import { useParams } from 'react-router-dom';
import { tarea } from "../Util/Promesas";
import React, { useState, useEffect, memo } from 'react'
import './ILC.css'
//import { useParams } from 'react-router-dom'; //Permite capturar Variables dinamicas
import { FaSpinner } from 'react-icons/fa';

//Titulo de la Tienda
export const ItemListContainer= memo(({titulo,mostrar}) => {
    //Pruebas en console.log
    //console.log(titulo);
    mostrar()
    const styles = {
      color: 'green'
    }
    //---------------------
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {cat} = useParams();


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
              //guardar en el estado
    }, [cat])

    return (    
      <>
        <Container>
          <h1 style={styles} >{titulo}</h1>
        
        </Container>
        <Container>
        {loading ? <><h2>Cargando productos</h2><FaSpinner icon="spinner" className="spinner"></FaSpinner> </> : <Items items={items}/>}  
        
        </Container>
      </>
    )
},(oldMostrar,newMostrar) => oldMostrar.mostrar() === newMostrar.mostrar())

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