
import Container from 'react-bootstrap/esm/Container'
import { useAppContext } from '../Context/appContext'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { getFirestore } from '../../service/getFirebase'
import firebase from 'firebase'
import { useState } from 'react'


export const Cart = () => {

    const {producto,borrarListado,borrarProducto,precioTotal} = useAppContext()
    const [form, setForm] = useState(initialState)

    //    console.log(producto.length)

    let carritoLleno = false

    if (producto.length === 0){
        carritoLleno=true
    }
//    console.log(carritoLleno)

    function handleChange(e) {        
            
        setForm(
            {
                ...form,
                [e.target.name]: e.target.value
            }
        )
    }
    function handleSubmit(e){
        e.preventDefault()
        const newOrder={
            buyer: form,
            items: producto,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: precioTotal()
        }
        console.log(newOrder)


        const db = getFirestore()
        const orders = db.collection('orders')

        //controlar si hay los productos que quiero agregar 
        orders.add(newOrder)
        .then(resp => alert(`GRACIAS POR SU COMPRA! La orden de compra es: ${resp.id}`))

        .finally(()=>{
            setForm(initialState)
            borrarListado()
        })
    }
    
    return (
        <Container>
            
        <div>
            <h2>Carrito de Compras</h2>
            {producto.map((prod)=> 
            <div >
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
        
            <form 
                onSubmit={handleSubmit}
                onChange={handleChange}
            >
                <input type="text"  placeholder="ing nombre" name="nombre" value={form.nombre}/>
                <input type="text"  placeholder="ing tel" name="tel" value={form.tel} />
                <input type="email" placeholder="ing email" name="email" value={form.email} />
                <input type="email" placeholder="confirme el mail" name="email2" />
                <button >Realizar compra</button>
                
            </form>

        <Link to='/'><Button>Volver a la tienda</Button></Link>
        <Button onClick={borrarListado}>Borrar Carrito</Button>
        </>}
        </Container>
    )
}


const initialState = {
    nombre: '',
    email:'',
    tel:''
}