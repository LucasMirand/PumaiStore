import React from 'react'
import Card from 'react-bootstrap/Card'
//import Button from 'react-bootstrap/Button'
import {ItemCount} from '../BtnCont/ItemCount'
import { useAppContext } from '../Context/appContext'
//import { Link } from 'react-router-dom'

export const ItemDetail= ({filtrado}) => {
  const {producto, agregarAlCarrito} = useAppContext()
  
  let stock = 5
  let initial = 1
  const onAdd=(cant)=>{
      console.log(cant)  
      agregarAlCarrito(filtrado,cant)
      console.log(producto)
  }
  

  //agregar


  //  console.log(filtrado)
    return (
        <>
        <Card key={filtrado.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={filtrado.imageId} />
        <Card.Body>
          <Card.Title>{filtrado.title}</Card.Title>
          <Card.Text>
            {filtrado.detail}
          </Card.Text>
          <Card.Text>
            {`$ ${filtrado.price}`}
          </Card.Text>
          {/*<Link to={`/producto/${filtrado.id}`}>*/}

          {/*</Link>*/}
        </Card.Body>
        <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
        </Card>
        </>
    )
}