import React from 'react'
import '../estilos/Tarea.css'
import { AiFillDelete } from 'react-icons/ai'

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {
    return (
            <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
                <div className='tarea-text'>
                    <input onClick={ ()=>completarTarea(id) } type="checkbox" />
                    {texto} 
                    <AiFillDelete onClick={ ()=>eliminarTarea(id) } size={'1.7rem'}/>
                </div>
            </div>
    )
}

export default Tarea