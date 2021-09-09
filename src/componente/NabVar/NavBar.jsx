import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { IconNav } from './CartWidget'
import {Link } from 'react-router-dom'


function NavBar() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Link to='/'>
              <Navbar.Brand > Pumai Store</Navbar.Brand>          
            </Link>
            <Nav>
              <Link to='/categoria/men'>
                <Nav>Hombre</Nav>
              </Link>
              <Nav.Link href="#features">Hockey</Nav.Link>
              <Link to='/contacto'>
                <Nav >Contacto</Nav>
              </Link>
            </Nav>
            <Navbar.Brand href="#home"> <IconNav/></Navbar.Brand>   
            
          </Container>
      </Navbar>
    )
}

export default NavBar

