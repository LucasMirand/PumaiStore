import './App.css';
import NavBar from './componente/NabVar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Titulo, Input, Cuerpo } from './componente/NabVar/contenedor/ItemListContainer';
import Container from 'react-bootstrap/esm/Container';
//import ComponenteConteiner from './componente/NabVar/contenedor/ComponenteContenedor';


function App() {
  const titulo = 'Bienvenido a la Tienda';
  //Ejemplos de prueba
  const nombre='Lucas';
  const detalles= {
    edad:'26',
    apellido:'Miranda'
  }

  const mostrar=()=>{
    console.log('ESTO ES UN ARROW FUNCTION')
  }
  return (
    <div className="App">
      <div className="navbar">
        <NavBar/> 
      </div>
      <br></br>
      <Titulo
        titulo={titulo} 
        nombre={nombre} 
        detalles={detalles}
        mostrar={mostrar}
      />
      <Container>
        <Input/>
        <Cuerpo/>

      </Container>
      
    </div>
  );
}

export default App;
