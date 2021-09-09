import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './componente/NabVar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemListContainer} from './componente/contenedor/ItemListContainer';
//import {ItemCount} from './componente/BtnCont/ItemCount';
import { ItemDetailContainer } from './componente/contenedor/ItemDetailContainer';
import Contacto from './componente/Contacto/Contacto';
//import Container from 'react-bootstrap/esm/Container';
//import ComponenteConteiner from './componente/NabVar/contenedor/ComponenteContenedor';


function App() {
  //ITEM LIST CONTAINER----START------
  //Titulo
  const titulo = 'Bienvenido a la Tienda';
  const mostrar=()=>{
    console.log('ESTO ES UN ARROW FUNCTION')
  }
  //ITEM LIST CONTAINER----End------
  
  //BTN-Contador ---Start--------------
  /*const stock = 8
  const initial = 1
  const agregar = (count) => {
    console.log(`usted agregó ${count} items`)
 
  }*/
//BTN-Contador ------end------------

//ITEM List Detail ----Start
//Filtro
//  const idP = 4;

//Item list Detal END


  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <NavBar/> 
        </div>
        <br></br>
        <Switch>
          <Route exact path='/'>
            {<ItemListContainer
              titulo={titulo} 
              mostrar={mostrar}/>}
          </Route>
          {/*-----------CATEGORIAS------------ */}
          <Route exact path='/categoria/:cat'>
            {<ItemListContainer
              titulo={titulo} 
              mostrar={mostrar}/>}
          </Route>
          <Route path='/contacto'><Contacto/> </Route>
          <Route exact path='/producto/:idp'>
            <ItemDetailContainer/>
          </Route>
          {/*<ItemCount 
          stock={stock}
          initial={initial}
          agregar={agregar}/>*/}
 
        </Switch>
        { /* <Footer/> */}     
      </div>
    </Router>
  );
}

export default App;
