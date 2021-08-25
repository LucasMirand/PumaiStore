import Container from 'react-bootstrap/Container'

//Cuerpo de la tienda
export function Cuerpo() {
  return (
    <>
      <p>Este es el cuerpo</p>
    </>
  )
}

//Relleno-Prueba
export function Input() {
  return (
    <>
      <div className="Input">
        <p>Hola soy input </p> 
        <form action="">
          <input type="email" name="" id="" />
        </form>
      </div>
    </>
  )
}



//Titulo de la Tienda
export const Titulo=({nombre,titulo,mostrar,detalles}) => {
    //Pruebas en console.log
    console.log(nombre);
    console.log(titulo);
    console.log(detalles)
    mostrar()
    const styles = {
      color: 'green'
    }
    //Desc "detalles"
    //const {edad,apellido} = detalles;
    /* (Dentro de Return)
    <p>edad: {edad}</p>
    <p>apellido: {apellido}</p>
    */

    return (    
      <>
        <Container>
          <h1 style={styles}>{titulo}</h1>

        </Container>
      </>
    )
}