import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './componente/NabVar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemListContainer} from './componente/contenedor/ItemListContainer';
import { ItemDetailContainer } from './componente/contenedor/ItemDetailContainer';
import Contacto from './componente/Contacto/Contacto';
import {AppContextProvider} from './componente/Context/appContext'
import { Cart } from './componente/Cart/Cart';




function App() {
  //ITEM LIST CONTAINER----START------
  //Titulo
  const titulo = 'Bienvenido a la Tienda';


  //ITEM LIST CONTAINER----End------
  return (
    
    <AppContextProvider>
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
              />}
          </Route>
          {/*-----------CATEGORIAS------------ */}
          <Route exact path='/categoria/:cat'>
            {<ItemListContainer
              titulo={titulo} 
              />}
          </Route>
          <Route path='/contacto'><Contacto/> </Route>
          <Route exact path='/producto/:idp'>
            <ItemDetailContainer/>
          </Route>
          <Route path='/cart'><Cart/> </Route>

 
        </Switch>

      </div>
    </Router>
    </AppContextProvider>
  );
}

export default App;
