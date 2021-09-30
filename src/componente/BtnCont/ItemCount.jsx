import { useState } from 'react';
import Container from 'react-bootstrap/Container'
//import Button from '@restart/ui/esm/Button';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

export function ItemCount({stock,initial,onAdd}) {
    const [count, setCount] = useState(initial)
    const [boton, setBoton] = useState(false)
    const sumar = () =>{
      if (count <stock){
      setCount(count +1);}
    }
    const restar = () => {
      if (count > 1) setCount(count -1)
    }
    const add =()=> {
      
      onAdd(count);
      setCount(initial)
      setBoton(true)
    }
    
    return (
      <>
        <div className="Input">
           
          <Container>
            
            {boton ? 
                <div>
                    <Link to='/cart'>
                        <Button variant="success">Finalizar</Button>
                    </Link>
                    <Link to='/'>
                        <Button variant="warning">Segir comprando</Button>
                    </Link>
                </div>
            :
              <div>
                <p>Cantidad </p>
                <Button variant="primary" onClick={restar}>-</Button> {' '}
                <label>{count}</label>{' '}
                <Button variant="primary" onClick={sumar}>+</Button>
                <Button variant="outline-success" onClick={add}>Agregar</Button>
              </div>
             }
          </Container>
        </div>

      </>
    )
  }

