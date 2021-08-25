

const estados = [ 'js', 'react js', 'component']
const Item = ({valor}) => {
    return (
        <button>
            {valor}
        </button>
    )
}

function ComponenteConteiner() {
    const items = estados.map(t=> <Item valor={t}/>)
    //llamadas a las apis
    return (        
        <div>    
            {items}
        </div>
    )
}

export default ComponenteConteiner