
import Container from 'react-bootstrap/esm/Container'
import { useAppContext } from '../Context/appContext'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


export const Cart = () => {

    const {producto,borrarListado,borrarProducto,precioTotal} = useAppContext()
    console.log(producto.length)

    let carritoLleno = false

    if (producto.length === 0){
        carritoLleno=true
    }
    console.log(carritoLleno)

    
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
        {carritoLleno ?
        <>
        <h3>Ooops! El carrito esta vacío</h3>
        <Link to='/'><Button>Volver a la tienda</Button></Link>
        </>:
        <>
        <div>Total: $ {precioTotal()}</div>
        <Link to='/'><Button>Volver a la tienda</Button></Link>
        <Button onClick={borrarListado}>Borrar Carrito</Button>
        </>}
        </Container>
    )
}
