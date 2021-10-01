import React from 'react'
import { getFirestore } from '../../service/getFirebase'
import firebase from 'firebase'
import { useAppContext } from '../Context/appContext'
import { useState } from 'react'
import './Cart.css'
import Container from 'react-bootstrap/esm/Container'

export const CartForm = () => {
    const {producto,borrarListado,precioTotal} = useAppContext()
    const [form, setForm] = useState(initialState)
    

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
        
        if ((newOrder.buyer.email2 === newOrder.buyer.email) & (newOrder.buyer.nombre !== "") & (newOrder.buyer.tel !== "")){
            const db = getFirestore()
            const orders = db.collection('orders')

            //controlar si hay los productos que quiero agregar 
            orders.add(newOrder)
            .then(resp => alert(`GRACIAS POR SU COMPRA! La orden de compra es: ${resp.id}`))

            .finally(()=>{
                setForm(initialState)
                borrarListado()
            })
        } else {alert('Hay campos incorrectos')}
    }

    return (
            <Container>
                <form 
                    className='formulario'
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                >
                    <input className='input-form' type="text"  placeholder="ing nombre" name="nombre" value={form.nombre}/>
                    <input className='input-form' type="number"  placeholder="ing tel" name="tel" value={form.tel} />
                    <input className='input-form' type="email" placeholder="ing email" name="email" value={form.email} />
                    <input className='input-form' type="email" placeholder="confirme el mail" name="email2" value={form.email2} />
                    <button className='btn-comprar'>Realizar compra</button>
                    
                </form>
            </Container>
    )
}
const initialState = {
    nombre: '',
    email:'',
    tel:''
}

