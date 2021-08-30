import { useState } from 'react';
import Container from 'react-bootstrap/Container'



//Cuerpo de la tienda
export function Cuerpo() {
  return (
    <>
      <p>Este es el cuerpo</p>
    </>
  )
}

//Relleno-Prueba
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



//Titulo de la Tienda
export const Titulo=({titulo,mostrar}) => {
    //Pruebas en console.log
    console.log(titulo);
    mostrar()
    const styles = {
      color: 'green'
    }
    //Desc "detalles"
    //const {edad,apellido} = detalles;
    /* (Dentro de Return)
    <p>edad: {edad}</p>
    <p>apellido: {apellido}</p>
    */

    return (    
      <>
        <Container>
          <h1 style={styles}>{titulo}</h1>

        </Container>
      </>
    )
}