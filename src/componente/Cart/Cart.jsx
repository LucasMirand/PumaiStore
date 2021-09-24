import { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useAppContext } from '../Context/appContext'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { getFirestore } from '../../service/getFirebase';
import firebase from "firebase";
import 'firebase/firestore'


export const Cart = () => {

    const[formData,setFormData] = useState(initialState)

    const {producto,borrarListado,borrarProducto,precioTotal} = useAppContext()


    let carritoLleno = false

    if (producto.length === 0){
        carritoLleno=true
    }


    function handleChange(e){
        setFormData(
            {
                ...formData,
                [e.target.name]:e.target.value
            }
        )
        console.log(formData)
    }

    function handleSubmit(e){
        e.preventDefault()
        const newOrder={
            buyer: formData,
            items: producto,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: precioTotal()
        }
        console.log(newOrder)    
        const db = getFirestore()
        const orders = db.collection('orders')
    
            //controlar si hay los productos que quiero agregar 
        orders.add(newOrder)
        .then(resp => alert(`la orden de compra es: ${resp.id}`))
        .catch(err => console.log(err))
        .finally(()=>{
            setFormData(initialState)
            borrarListado()
        })
        /*
        db.collection('items').doc('idDelProd')
        .update({
            stock: stock-1
        })
        .then(res => console.log(res)) */
    }

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
        <br/>
        <form 
            onSubmit={handleSubmit}
            onChange={handleChange}>
                <input type="text" placeholder='ing nombre' name='nombre' value={formData.nombre}/>
                <input type="text" placeholder='ing tel' name='tel' value={formData.tel} />
                <input type="text" placeholder='ing email' name='email' value={formData.email} />
                <input type="text" placeholder='confirme el mail' name='email2' />


                <Button> Terminar compra</Button>
        </form>
        <Link to='/'><Button>Volver a la tienda</Button></Link>
        <Button onClick={borrarListado}>Borrar Carrito</Button>
        </>}


        </Container>
    )
}

const initialState ={
    nombre: '',
    email:'',
    tel:''
}
