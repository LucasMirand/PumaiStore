import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
//import { Link } from 'react-router-dom'

export const ItemDetail= ({filtrado}) => {
    console.log(filtrado)
    return (
        <>
        <Card key={filtrado.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={filtrado.image} />
        <Card.Body>
          <Card.Title>{filtrado.title}</Card.Title>
          <Card.Text>
            {filtrado.detail}
          </Card.Text>
          <Card.Text>
            {`$ ${filtrado.price}`}
          </Card.Text>
          {/*<Link to={`/producto/${filtrado.id}`}>*/}
            <Button variant="success">Comprar</Button>
          {/*</Link>*/}
        </Card.Body>
        </Card>
        </>
    )
}