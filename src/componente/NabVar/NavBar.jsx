import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { IconNav } from './CartWidget'
import {Link } from 'react-router-dom'
import { useAppContext } from '../Context/appContext'


function NavBar() {

    const {iconCart, producto} = useAppContext()
    let carrito = false

    if (producto.length === 0){
      carrito=true
    }

    return (
      <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Link className="nav-link" to='/'>
              <Navbar.Brand>Pumai Store</Navbar.Brand>          
            </Link>
            <Nav>
              <Link className="nav-link" to='/categoria/men'>
                <Nav>Hombre</Nav>
              </Link>
              <Link className="nav-link" to='/categoria/women'>
                <Nav>Mujer</Nav>
              </Link>
              <Link className="nav-link" to='/contacto'>
                <Nav>Contacto</Nav>
              </Link>
            </Nav>

            {carrito ?
            <>
              <div></div>
            </>:
            <>
                <Link to='/cart' className="icon-cart">
                  <>{iconCart()}</>
                  <Navbar.Brand href="#home"> <IconNav iconCart={iconCart()} /></Navbar.Brand>   
                </Link>
            </>}


            
          </Container>
      </Navbar>
    )
}

export default NavBar

