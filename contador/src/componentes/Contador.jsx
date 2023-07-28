import React, { useState } from 'react'
import Pantalla from './Pantalla'
import Boton from './Boton'

const Contador = () => {
    const [numeroClic, setNumeroClic] = useState(0);

    const contar =() =>{
        setNumeroClic(numeroClic + 1);
    }

    const reset = () => {
        setNumeroClic(0);
    }

    return (
        <div>
            <Pantalla numClic={numeroClic}/>
            <Boton 
                texto='click'
                esBotonClic={true}
                manejarClick={contar}
            />

            <Boton 
                texto='Reset'
                esBotonClic={false}
                manejarClick={reset}
            />
        </div>
    )
}

export default Contador