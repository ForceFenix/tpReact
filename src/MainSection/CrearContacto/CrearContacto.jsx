import React, { useState } from 'react';
import './CrearContacto.css'

const CrearContacto = ({ crearContacto, btnCerrar }) => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [grupo, setGrupo] = useState('desconocido');

//HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML
//HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML
    return (
        <>
            <div className="form-container">
                <div className="close-container" onClick={() => btnCerrar(false)}>
                </div>
                <form onSubmit={() => crearContacto(nombre, apellido, email, telefono, grupo)} id='formulario' >
                    <h2>Creando contacto</h2>
                    <div className="form--inputs">
                        <div className="input-container">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text"
                                id="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="apellido">Apellido</label>
                            <input type="text"
                                id="apellido"
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="email">E-mail</label>
                            <input type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="telefono">Teléfono</label>
                            <input type="number"
                                id="telefono"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                required
                            />
                        </div>
                        <div className="radios-container">
                            <h3 className='label--radios'>Grupo</h3>
                            <div className="input-radio">
                                <label htmlFor="amigos">Amigos</label>
                                <input type="radio" id='amigos' name='grupo' value='Amigos' onChange={(e) => setGrupo(e.target.value)} required />
                            </div>
                            <div className="input-radio">
                                <label htmlFor="trabajo">Trabajo</label>
                                <input type="radio" id='trabajo' name='grupo' value='Trabajo' onChange={(e) => setGrupo(e.target.value)} />
                            </div>
                            <div className="input-radio">
                                <label htmlFor="estudio">Estudio</label>
                                <input type="radio" id='estudio' name='grupo' value='Estudio' onChange={(e) => setGrupo(e.target.value)} />
                            </div>
                            <div className="input-radio">
                                <label htmlFor="desconocido">Desconocido</label>
                                <input type="radio" id='desconocido' name='grupo' value='Desconocido' onChange={(e) => setGrupo(e.target.value)} />
                            </div>
                        </div>

                    </div>
                    <input className="form-button" type="submit" />
                </form>
            </div>
        </>
    )
}

export { CrearContacto }