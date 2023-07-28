import React from 'react'
import '../estilos/Pantalla.css'

const Pantalla = ({ numClic }) => {
    return (
        <div className='pantalla'>
            {numClic}
        </div>
    )
}

export default Pantalla