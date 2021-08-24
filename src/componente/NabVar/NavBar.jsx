import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



function NavBar() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">

          <Navbar.Brand href="#home">Pumai Store</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Rugby</Nav.Link>
            <Nav.Link href="#features">Hockey</Nav.Link>
            <Nav.Link href="#pricing">Niños</Nav.Link>
          </Nav>

      </Navbar>
    )
}

export default NavBar

