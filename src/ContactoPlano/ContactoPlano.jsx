import React from 'react';
import './ContactoPlano.css'
const ContactoPlano = ({props}) => {
    const {nombre, apellido, telefono, email} = props;
    return(
        <>
        <div className="contacto-container">
            <div className="contacto--img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN9N1o6-fXzFVbyRe8c5IQspi7UrCcQS3rNfS_-huFCw&s" alt="" />
            </div>
            <div className="contacto--txt">
                <h2>{nombre} {apellido}</h2>
                <div className="contacto--txt__datos">
                <h4>Telefono: {telefono}</h4>
                <h4>E-mail: {email}</h4>
                </div>
            </div>
        </div>
        </>
    )
}

export { ContactoPlano }