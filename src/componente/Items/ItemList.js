import { Items } from "./Items";
//import React, { memo } from 'react'
import './ItemList.css'
import Container from "react-bootstrap/esm/Container";


export const ItemList= ({items}) => {
  

    return (
      <Container>
        <div className="Items contenedor">
            {items.map((item)=> <Items key={item.id} item={item}/>)}
            
        </div>
      </Container>
    )
  }
  
