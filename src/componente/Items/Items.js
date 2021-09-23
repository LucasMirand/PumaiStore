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
        
      <Card  key={item.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.imageId} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.detail}
          </Card.Text>
          <Card.Text>
            {`$ ${item.price}`}
          </Card.Text>
          <Link to={`/producto/${item.id}`}>
            <Button variant="primary">Agregar</Button>
          </Link>
        </Card.Body>
      </Card>
      
      </>
    )
}
