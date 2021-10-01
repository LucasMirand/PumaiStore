import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './ItemList.css'
//import { useAppContext } from '../Context/appContext'


export const Items = ({item}) => {

  //const {producto} = useAppContext()
  //console.log(producto)
    return (
        <>{/* 
        <ul>
            <li key={item.id}>{`${item.title} $: ${item.price}`}</li>          
        </ul> */}
        
      <Card className='card-items'  >
        <Card.Img variant="top" src={item.imageId} style={{ height: '70%' }} className='img-card' />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.detail}
          </Card.Text>
          <Card.Text style={{textAlign: 'center'}}>
            {`Precio: $ ${item.price}`}
          </Card.Text>
          <Link to={`/producto/${item.id}`}>
            <Button className='btn-agregar' variant="primary">Agregar</Button>
          </Link>
        </Card.Body>
      </Card>
      
      </>
    )
}
