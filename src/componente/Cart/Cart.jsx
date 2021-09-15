
import Container from 'react-bootstrap/esm/Container'
import { useAppContext } from '../Context/appContext'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


export const Cart = () => {

    const {producto,borrarListado,borrarProducto} = useAppContext()
    console.log(producto)
    


    return (
        <Container>
            
        <div>
            <h2>Carrito de Compras</h2>
            {producto.map((prod)=> 
            <div key={prod.item.id}>
                <div>{prod.item.title} x {prod.quantity}</div>
                <div>precio: $ {prod.item.price*prod.quantity}</div>
                <Button onClick={()=>borrarProducto(prod.item.id)}>Remover Producto </Button> 
            </div>)}
        </div>
        <Link to='/'><Button>Volver a la tienda</Button></Link>
        <Button onClick={borrarListado}>Borrar Carrito</Button>
        
        </Container>
    )
}
