import React, { useState } from 'react'
import Entrada from './Entrada'
import Tarea from './Tarea';
import '../estilos/ListaTarea.css'

const ListaTarea = () => {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) =>{
        if(tarea.texto.trim()){//comprobar que no este vacia
            tarea.texto = tarea.texto.trim();//quito espacios en blanco
            const tareaNueva = [tarea, ...tareas];//agrego a tarea al principio del arreglo
            //console.log(tareaNueva);
            setTareas(tareaNueva);
        }
    }

    const tareaCompletada = (id) =>{
        const tareaActualizada = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        console.log(tareaActualizada);
        setTareas(tareaActualizada);
    }

    const tareaEliminar = (id) =>{
        const tareaEliminada = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareaEliminada);
    }

    return (
        <div className='tarea-lista-contenedor'>
            <Entrada enviarTarea={agregarTarea}/>
            {
                tareas.map(tarea => 
                    <Tarea 
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        completarTarea={tareaCompletada}
                        eliminarTarea={tareaEliminar}
                    />
                )
            }
        </div>
    )
}

export default ListaTarea