import React from 'react'
import '../estilos/Boton.css'

const Boton = ({ texto, esBotonClic, manejarClick }) => {
    return (
        <div className='container-boton'>
            <button className={esBotonClic? 'btnClic' : 'btnReset'} onClick={manejarClick}>
                {texto}
            </button>
        </div>
    )
}

export default Boton