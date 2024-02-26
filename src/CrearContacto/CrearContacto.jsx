import React, { useState } from 'react';
import './CrearContacto.css'


const CrearContacto = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    var crearContacto = (event) => {
        event.preventDefault()
        const mensaje = {
            id: Date.now(),
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono,
            grupo: "amigos"
        }
        var listadoLS = JSON.parse(localStorage.getItem("listado"));
        listadoLS.push(mensaje)
        localStorage.setItem("listado", JSON.stringify(listadoLS))
        console.log(JSON.parse(localStorage.getItem("listado")))

    };

console.log(JSON.parse(localStorage.getItem("newContact")));

    return (

        <>

            <h1></h1>
            <form onSubmit={crearContacto}>
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
                <input type="submit" />
            </form>

        </>
    )
}

export { CrearContacto }