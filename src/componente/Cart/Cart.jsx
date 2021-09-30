//import { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/Image'
import { useAppContext } from '../Context/appContext'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './Cart.css'
import { CartForm } from './CartForm'
import ListGroup from 'react-bootstrap/ListGroup'


export const Cart = () => {

    const {producto,borrarListado,borrarProducto,precioTotal} = useAppContext()

    let carritoLleno = false

    if (producto.length === 0){
        carritoLleno=true
    }
 

    return (
        <Container>
            
        <div className='carrito'>
            <h2>Carrito de Compras</h2>
            <ListGroup variant='flush'>
            {producto.map((prod)=> 
                <ListGroup.Item className='producto-carrito' key={prod.id} >
                    <Image className='img-carrito' src={prod.item.imageId} rounded />
                    <div>
                        <h4>{prod.item.title} </h4>
                        <p>Cant: {prod.quantity} / Precio: $ {prod.item.price*prod.quantity}</p>
                        <p></p>                        
                    </div>
                    <Button onClick={()=>borrarProducto(prod.item.id)} variant='danger' style={{height:'3rem'}}> X </Button>
                </ListGroup.Item>)}
            </ListGroup>
        </div>
        {carritoLleno ?
        <>
        <h3>Ooops! El carrito esta vacío</h3>
        <Link to='/'><Button variant='success'>Volver a la tienda</Button></Link>
        </>:
        <>
            <p className='total'>Total: $ {precioTotal()}</p>

            <CartForm/>
            <div className='btn-cart'>
                <Button variant='success'><Link className='link' to='/'>Volver a la tienda</Link></Button>
                <Button variant='danger' onClick={borrarListado}>Borrar Carrito</Button>
            </div>
        </>}


        </Container>
    )
};

