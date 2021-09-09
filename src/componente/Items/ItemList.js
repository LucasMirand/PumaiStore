import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
export const ItemList = ({item}) => {

//console.log(item)
    return (
        <>{/* 
        <ul>
            <li key={item.id}>{`${item.title} $: ${item.price}`}</li>          
        </ul> */}
        
      <Card key={item.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image} />
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
