import React, { useState } from 'react';
import './CrearContacto.css'

const CrearContacto = ({ crearContacto, btnCerrar }) => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');


    return (

        <>
            <div className="form-container" id='formulario'>
                <form onSubmit={() => crearContacto(nombre, apellido, email, telefono)}>
                    <button className='form-close' id='formClose' onClick={() => btnCerrar(false)}>x</button>
                    <h2>Creando contacto</h2>
                    <div className="form--inputs">
                        <div className="input-container">


                            <label htmlFor="nombre">Nombre</label>
                            <input type="text"
                                id="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}

                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="apellido">Apellido</label>
                            <input type="text"
                                id="apellido"
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="email">E-mail</label>
                            <input type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="telefono">Teléfono</label>
                            <input type="text"
                                id="telefono"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                            />
                        </div>
                    </div>
                    <input className="form-button" type="submit" />
                </form>
            </div>
        </>
    )
}

export { CrearContacto }