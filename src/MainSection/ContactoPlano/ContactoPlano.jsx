import React from 'react';
import './ContactoPlano.css'
const ContactoPlano = ({ props, borrar }) => {
    const { id, nombre, apellido, telefono, email } = props;



    return (
        <>
            <div className="contacto-container">
                <div className="contacto--txt">
                    <h2>{nombre} {apellido}</h2>
                    <button className='contacto--dlt' value={id} onClick={(e) => borrar(e.target.value)}><i className="bi bi-x-lg"></i></button>
                </div>
                <div className="contacto--datos">
                    <h4><i class="bi bi-phone"></i>+{telefono}</h4>
                    <h4><i class="bi bi-envelope-at"></i>{email}</h4>
                </div>

            </div>
        </>
    )
}

export { ContactoPlano }