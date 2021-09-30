import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container'
import {ItemCount} from '../BtnCont/ItemCount'
import { useAppContext } from '../Context/appContext'
import './ItemDetail.css'

export const ItemDetail= ({filtrado}) => {
  const { agregarAlCarrito} = useAppContext()
  
//  let stockk = 5
  
  let initial = 1
  const onAdd=(cant)=>{

      agregarAlCarrito(filtrado,cant)

  }
  

    return (
        <>
        <Container>
          <Card className='card-detail' key={filtrado.id} >
            <Card.Img variant="top" src={filtrado.imageId} style={{ width: '10rem' }} />
            <Card.Body>
                <Card.Title>{filtrado.title}</Card.Title>
                <Card.Text>
                  {filtrado.description}
                </Card.Text>
                <Card.Text>
                  {`$ ${filtrado.price}`}
                </Card.Text>
                <ItemCount stock={filtrado.stock} initial={initial} onAdd={onAdd}/>
            </Card.Body>
            
          </Card>
        </Container>
        </>
    )
}