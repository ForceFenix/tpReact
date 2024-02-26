import React from 'react';
import './Contacto.css'

const Contacto = () => {
    return(
        <>
        <div className="contacto-container">
            <div className="contacto--img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN9N1o6-fXzFVbyRe8c5IQspi7UrCcQS3rNfS_-huFCw&s" alt="" />
            </div>
            <div className="contacto--info">
                <h2>Juan Perez</h2>
                <div className="contacto--info__txt">
                    <h4>Correo: </h4>
                    <h4>Celular: </h4>
                    <h4>Cumpleaños: </h4>
                </div>
            </div>
        </div>
        </>
    )
}

export { Contacto }