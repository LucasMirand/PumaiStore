import { useState } from 'react';
import Container from 'react-bootstrap/Container'
//import Button from '@restart/ui/esm/Button';
import Button from 'react-bootstrap/Button'

export function ItemCount({stock,initial,agregar}) {
    const [count, setCount] = useState(initial)
    const sumar = () =>{
      if (count <stock){
      setCount(count +1);}
    }
    const restar = () => {
      if (count > 1) setCount(count -1)
    }
    const add =()=> {
      agregar(count);
      setCount(initial)
    }
    
    return (
      <>
        <div className="Input">
          <p>Contador </p> 
          <Container>
            <Button variant="primary" onClick={restar}>-</Button> {' '}
            <label>{count}</label>{' '}
            <Button variant="primary" onClick={sumar}>+</Button>
            <div><Button variant="outline-success" onClick={add}>Agregar</Button></div>
          </Container>
          
        </div>
      </>
    )
  }