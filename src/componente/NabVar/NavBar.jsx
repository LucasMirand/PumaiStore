import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { IconNav } from './CartWidget'


function NavBar() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home"><IconNav/> Pumai Store</Navbar.Brand>          
            <Nav>
              <Nav.Link href="#home">Rugby</Nav.Link>
              <Nav.Link href="#features">Hockey</Nav.Link>
              <Nav.Link href="#pricing">Niños</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
    )
}

export default NavBar

