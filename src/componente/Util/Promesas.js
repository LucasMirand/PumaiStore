import { stockProds } from "./Prods";
  
  function getProds(id) {
    if (id===undefined) {
        return stockProds
  
    }else{
        return stockProds.find( producto=> producto.id === id)
    }
  }
  
  export let tarea = new Promise((resuelto) => {
    console.log("ejecutando promesa") 
    setTimeout(() => {
        resuelto(getProds());        
    }, 3000);
  },[]);