import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { IconNav } from './CartWidget'
import {Link } from 'react-router-dom'
import { useAppContext } from '../Context/appContext'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function NavBar() {

    const {iconCart, producto} = useAppContext()
    let carrito = false

    if (producto.length === 0){
      carrito=true
    }

    return (
      <Navbar bg="dark" variant="dark" expand="lg">
          <Container >
          <div className="nav-container">
            <div className="logo">
              <Link className="nav-link" to='/'>
                <Navbar.Brand>Pumai Store</Navbar.Brand>          
              </Link>
            </div>
            <div className='categorias'> 
              <Nav >
                <Row>                  
                  <Col><Link className="nav-link" to='/categoria/men'>
                    <Nav>Hombre</Nav>
                  </Link></Col>
                  <Col><Link className="nav-link" to='/categoria/electronics'>
                    <Nav>Tecnologia</Nav>
                  </Link></Col>
                  <Col><Link className="nav-link" to='/categoria/jewelery'>
                    <Nav>Joyeria</Nav>
                  </Link></Col>
                  <Col><Link className="nav-link" to='/categoria/women'>
                    <Nav>Mujer</Nav>
                  </Link></Col>
                </Row>
              </Nav>
            </div>
            <div className="iconoca">
              {carrito ?
              
                  <div className="icon-cart">{""}</div>
                :
                <div className="icon-cart">
                    <Link to='/cart' className="icon-cart">
                      <>{iconCart()}</>
                      <Navbar.Brand href="#home"> <IconNav iconCart={iconCart()} /></Navbar.Brand>   
                    </Link>
                
                </div>
              }
            </div>

          </div>
          </Container>
      </Navbar>
    )
}

export default NavBar

