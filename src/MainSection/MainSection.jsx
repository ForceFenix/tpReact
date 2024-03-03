import React, { useState } from 'react';
import { CrearContacto } from './CrearContacto/CrearContacto';
import { ContactoPlano } from './ContactoPlano/ContactoPlano';
import './MainSection.css';

const MainSection = () => {

    const listado = [
        {
            id: 0,
            nombre: "Juan",
            apellido: "Perez",
            telefono: "1548943848",
            email: "saknvcx@gmail.com",
            grupo: "trabajo"
        },
        {
            id: 1,
            nombre: "Raul",
            apellido: "Comini",
            telefono: "564213857",
            email: "sajnsd@gmail.com",
            grupo: "trabajo"
        },
        {
            id: 2,
            nombre: "Laureano",
            apellido: "Vega",
            telefono: "484398164",
            email: "akncaowq@hotmail.com",
            grupo: "trabajo"
        },
        {
            id: 3,
            nombre: "Santiago",
            apellido: "Galarza",
            telefono: "448/434354",
            email: "aljjboqj@hotmail.com",
            grupo: "amigos"
        },
        {
            id: 4,
            nombre: "Rodri",
            apellido: "Duvivier",
            telefono: "21312121",
            email: "tuvieja@gmail.com",
            grupo: "amigos"
        }
    ];

    // si no existe "listado" en el localStorage, la creo vacia
    if ((localStorage.getItem('listado') == undefined) || (localStorage.getItem('listado') == '')) {
        // paso al localStorage el listado de contactos , volviendolo string con JSON.stringify (EL LOCAL STORAGE SOLO ALMACENA STRING)
        localStorage.setItem('listado', JSON.stringify(listado));
    }
    const [contactos, setContactos] = useState(JSON.parse(localStorage.getItem("listado")));
    const [buscar, setBuscar] = useState('');
    const [formulario, setFormulario] = useState(false);

    const crearContacto = (nombre, apellido, email, telefono) => {
        const mensaje = {
            id: Date.now(),
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono,
            grupo: "amigos" //cambiar
        }
        const listadoStorage = JSON.parse(localStorage.getItem("listado"));
        listadoStorage.push(mensaje);
        localStorage.setItem("listado", JSON.stringify(listadoStorage))
        setContactos(actualizarLS);
        setFormulario(false)
    };

    const eliminarContacto = (e) => {
        // vuelvo lista el contenido en el localStorage
        const listadoStorage = JSON.parse(localStorage.getItem("listado"));
        // genero una lista nueva que no contenga el "identificador"
        const nuevoListadoStorage = listadoStorage.filter(element => {
            return element.id != e
        })
        // actualizo el contenido del localStorage
        localStorage.setItem("listado", JSON.stringify(nuevoListadoStorage))
        // actualizo el valor de "contactos"
        setContactos(JSON.parse(localStorage.getItem("listado")));
    }

    const filtro = () => {
        if (buscar == '') {
            return contactos
        } else {
            return contactos.filter(element => element.nombre.toLowerCase().startsWith(buscar.toLowerCase()))
        }
    }

    const ocultarFormulario = (e) => {
        setFormulario(e)
    }

    return (
        <>
            <div className="main-container">
                <div className="agenda-container">
                    <div className="agenda--input">
                        <input type="text" value={buscar} onChange={(e) => setBuscar(e.target.value)} placeholder='Ingrese el nombre...'/>
                        <button onClick={() => setFormulario(true)}>+Nuevo Contacto</button>
                    </div>
                    <div className="contactos-container">
                        {
                            filtro().map(element =>
                                (<ContactoPlano key={element.id} props={element} borrar={eliminarContacto} />))
                        }
                    </div>
                </div>
                {
                    (formulario == true) && <CrearContacto crearContacto={crearContacto} btnCerrar={ocultarFormulario} />
                }
            </div>
        </>

    )
}

export { MainSection }