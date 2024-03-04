import React from 'react';
import './ContactoPlano.css'
const ContactoPlano = ({ props, borrar, abrir }) => {
    const { id, nombre, apellido, telefono, email, grupo } = props;

    const imagenPortada = (grupo) =>{
        if(grupo == "Amigos"){
            return "contacto--txt amigos"
        }else if(grupo == "Trabajo"){
            return "contacto--txt trabajo"
        }else if(grupo == "Estudio"){
            return "contacto--txt estudio"
        }else if(grupo == "Desconocido"){
            return "contacto--txt desconocido"
        }
    }

    return (
        <>
            <div className="contacto-container" >
                <div className={imagenPortada(grupo)} >
                    <h2 onClick={(e) => abrir(id)}>{nombre} {apellido}</h2>
                    <button className='contacto--dlt' value={id} onClick={(e) => borrar(e.target.value)}><i className="bi bi-x-lg"></i></button>
                </div>
                <div className="contacto--datos">
                    <h4><i className="bi bi-phone"></i>+{telefono}</h4>
                    <h4><i className="bi bi-envelope-at"></i>{email}</h4>
                </div>

            </div>
        </>
    )
}

export { ContactoPlano }