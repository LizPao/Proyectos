import React, { useState } from 'react'
import '../estilos/Entrada.css'

const Entrada = ({ enviarTarea }) =>{
    const [input, setInput] = useState('');

    const manejarCambio = (e) =>{
        console.log(e.target.value);
        setInput(e.target.value);
    }

    const manejarEnvio = (e) =>{
        e.preventDefault();
        const mensaje = {
            id: (Math.random()*(100-0)+0),
            texto: input,
            fecha: new Date(),
            completada: false
        }
        console.log(mensaje);
        setInput(' ');
        enviarTarea(mensaje);
    }

    return(
        <form className='tarea-formulario' onSubmit={manejarEnvio}>
            <div className='contendor-input'>
                <input className='tarea-texto' type="text" name="texto" onChange={manejarCambio} value={input} placeholder='Escribe una tarea...'/>
                <button className='tarea-btn' type="submit">Agregar Tarea</button>
            </div>
            
        </form>
    );
}

export default Entrada;