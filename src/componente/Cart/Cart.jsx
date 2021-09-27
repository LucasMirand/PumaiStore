import { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useAppContext } from '../Context/appContext'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
<<<<<<< HEAD
import { getFirestore } from '../../service/getFirebase';
import firebase from "firebase";
import 'firebase/firestore'
=======
import { getFirestore } from '../../service/getFirebase'
import firebase from 'firebase'
import { useState } from 'react'
>>>>>>> Class13


export const Cart = () => {

    const[formData,setFormData] = useState(initialState)

    const {producto,borrarListado,borrarProducto,precioTotal} = useAppContext()
<<<<<<< HEAD

=======
    const [form, setForm] = useState(initialState)

    //    console.log(producto.length)
>>>>>>> Class13

    let carritoLleno = false

    if (producto.length === 0){
        carritoLleno=true
    }
<<<<<<< HEAD


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
=======
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
>>>>>>> Class13
    
        
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
<<<<<<< HEAD
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
=======
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

>>>>>>> Class13
        <Link to='/'><Button>Volver a la tienda</Button></Link>
        <Button onClick={borrarListado}>Borrar Carrito</Button>
        </>}


        </Container>
    )
}

<<<<<<< HEAD
const initialState ={
    nombre: '',
    email:'',
    tel:''
}
=======

const initialState = {
    nombre: '',
    email:'',
    tel:''
}
>>>>>>> Class13
