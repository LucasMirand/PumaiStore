import {useState, createContext, useContext} from 'react'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)


export const AppContextProvider = ({children}) => {
    const [producto, setProducto] = useState([])
   
    function agregarAlCarrito(prod, cant){
        if(producto.find(prods => prods.item.id === prod.id)){
         alert('ya agregaste éste producto al carrito');
         const updateCart = [...producto]
         updateCart.forEach((prods) =>{
             if(prods.item.id === prod.id){prods.quantity += cant}
         })
        } else setProducto([...producto, {item: prod, quantity: cant}])
    }

    const borrarListado=()=>{
        setProducto([])
    }
    const borrarProducto =(itemId)=> {
        const elimProd = producto.filter (prods => prods.item.id !== itemId )
        setProducto([...elimProd])
    }

    const precioTotal = () =>{
        return producto.reduce((acum,valor) => acum + (valor.item.price* valor.quantity),0)
    }

    const iconCart =()=> {
        return producto.reduce((acun,valor)=> acun + valor.quantity,0)
    }
    console.log(producto)
    return (
        <AppContext.Provider value={{
            producto, 
            agregarAlCarrito,
            borrarListado,
            iconCart,
            precioTotal,
            borrarProducto
        }}>
            {children}
        </AppContext.Provider>
    )
}
