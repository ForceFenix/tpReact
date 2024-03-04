import React from 'react';
import './ContactoExpandido.css'

const ContactoExpandido = ({ props, cerrar }) => {
    const { id, nombre, apellido, telefono, email, grupo} = props;

    const imagenPortada = (grupo) =>{
        if(grupo == "Amigos"){
            return "contacto--portada amigos"
        }else if(grupo == "Trabajo"){
            return "contacto--portada trabajo"
        }else if(grupo == "Estudio"){
            return "contacto--portada estudio"
        }else if(grupo == "Desconocido"){
            return "contacto--portada desconocido"
        }
    }
    return (
        <>
            <div className="contactoExpandido-container">
                <div className="contactoExpandido-blur" onClick={()=>cerrar()}>
                </div>
                <div className="contacto--card">
                    <div className={imagenPortada(grupo)}>
                        <div className="profilePicture">
                            <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="perfil" />
                        </div>
                    </div>
                    <div className="contacto--datos">
                        <h2>{nombre} {apellido}</h2>
                        <div className="contacto--datos__datos">
                            <h3>Telefono: {telefono} </h3>
                            <h3>E-Mail: {email}</h3>
                            <h3>Grupo: {grupo}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { ContactoExpandido }