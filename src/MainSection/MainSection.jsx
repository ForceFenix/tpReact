import React, { useState } from 'react';
import { CrearContacto } from './CrearContacto/CrearContacto';
import { ContactoPlano } from './ContactoPlano/ContactoPlano';
import './MainSection.css';
import { ContactoExpandido } from './ContactoExpandido/ContactoExpandido';

//agregar la funcionalidad del filtro grupo

const MainSection = ({ filtroGrupo }) => {

    const listado = [
        {
            id: 0,
            nombre: "Juan",
            apellido: "Perez",
            telefono: "1548943848",
            email: "saknvcx@gmail.com",
            grupo: "Trabajo"
        },
        {
            id: 1,
            nombre: "Raul",
            apellido: "Comini",
            telefono: "564213857",
            email: "sajnsd@gmail.com",
            grupo: "Trabajo"
        },
        {
            id: 2,
            nombre: "Laureano",
            apellido: "Vega",
            telefono: "484398164",
            email: "akncaowq@hotmail.com",
            grupo: "Trabajo"
        },
        {
            id: 3,
            nombre: "Santiago",
            apellido: "Galarza",
            telefono: "448/434354",
            email: "aljjboqj@hotmail.com",
            grupo: "Amigos"
        },
        {
            id: 4,
            nombre: "Rodri",
            apellido: "Duvivier",
            telefono: "21312121",
            email: "ejemploasda@gmail.com",
            grupo: "Amigos"
        }
    ];
    // si no existe "listado" en el localStorage, la creo vacia
    if (!localStorage.getItem('listado')) {
        // paso al localStorage el listado de contactos , volviendolo string con JSON.stringify (EL LOCAL STORAGE SOLO ALMACENA STRING)
        localStorage.setItem('listado', JSON.stringify(listado));
    }

    const [contactos, setContactos] = useState(JSON.parse(localStorage.getItem("listado")));
    const [sinContactos, setSinContactos] = useState(false);
    const [buscar, setBuscar] = useState('');
    const [formulario, setFormulario] = useState(false);
    const [mostrar, setMostrar] = useState(false)
    const [contactoSeleccionado, setContactoSeleccionado] = useState('')

    //crea un nuevo contacto en la lista de contactos, tomando los parametros pasados por el formulario
    const crearContacto = (nombre, apellido, email, telefono, grupo) => {
        !localStorage.getItem("listado") && localStorage.setItem("listado", "")
        const mensaje = {
            id: Date.now(),
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono,
            grupo: grupo
        }
        // vuelvo una lista de objetos al contenido de localStorage
        const listadoStorage = JSON.parse(localStorage.getItem("listado"));

        // agrego el mensaje al final de la lista de objetos obtenida arriba ↑↑
        listadoStorage.push(mensaje);
        //ordeno alfabeticamente la lista
        listadoStorage.sort((x, y) => x.nombre.localeCompare(y.nombre));
        // actualizo el listado en el localStorage
        localStorage.setItem("listado", JSON.stringify(listadoStorage));

        setContactos(listadoStorage);
        setFormulario(false)
    };
    //actualiza el listado de contactos con aquellos que no compartan el id seleccionado
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
    //ejecura la funcion crearContactos() con datos random
    const contactoAleatorio = () => {
        //Dado un array, elegira un elemento aleatorio.
        var elementoAlAzar = array => {
            var indiceAleatorio = Math.floor(Math.random() * array.length);
            var elementoAleatorio = array[indiceAleatorio];
            return elementoAleatorio;
        }
        const nombres = [
            "Juan",
            "María",
            "Carlos",
            "Luisa",
            "Pedro",
            "Ana",
            "Miguel",
            "Laura",
            "Javier",
            "Sofía"
        ];
        const apellidos = [
            "Gómez",
            "Martínez",
            "Rodríguez",
            "Fernández",
            "López",
            "González",
            "Sánchez",
            "Pérez",
            "García",
            "Díaz"
        ];
        const correosElectronicos = [
            "usuario1234@gmail.com",
            "cliente5678@yahoo.com",
            "correo999@outlook.com",
            "ejemplo2000@hotmail.com",
            "correo1@gmail.com",
            "ejemplo2@outlook.com",
            "correo3@yahoo.com",
            "usuario4@hotmail.com",
            "correo5@gmail.com",
            "ejemplo6@yahoo.com"
        ];
        const telefonos = [
            "541155555555",
            "543511234567",
            "541123456789",
            "542112345678",
            "542212345678",
            "542912345678",
            "543412345678",
            "543762345678",
            "542612345678",
            "542802345678"
        ];
        const grupos = [
            "Amigos",
            "Trabajo",
            "Estudio",
        ]
        crearContacto(elementoAlAzar(nombres), elementoAlAzar(apellidos), elementoAlAzar(correosElectronicos), elementoAlAzar(telefonos), elementoAlAzar(grupos))

    }
    //analiza el contenido del (".agenda--input input") en conjunto con el tipo de grupo al que pertenece, para ver si coincide con algun contacto.
    const filtro = () => {
        if (filtroGrupo != "todos") {
            var filtrados = [...contactos].filter(element => element.grupo.toLowerCase() == filtroGrupo);
        } else {
            var filtrados = [...contactos];
        }
        if (buscar == '') {
            return filtrados
        } else {
            return filtrados.filter(element => element.nombre.toLowerCase().startsWith(buscar.toLowerCase()))
        }
    }
    const ocultarFormulario = (e) => {
        setFormulario(e)
        setMostrar(false)
    }
    const abrirContacto = (e) => {
        setMostrar(!mostrar);
        let listaClick = contactos.filter(element => element.id == e);
        let objetoEncontrado = listaClick[0];
        setContactoSeleccionado(objetoEncontrado)
    }

    //HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML
    //HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML
    return (
        <>
            <div className="main-container">
                <div className="agenda-container">
                    <div className="agenda--input">
                        <input type="text" value={buscar} onChange={(e) => setBuscar(e.target.value)} placeholder='Ingrese el nombre...' />
                        <button id='clearStorage' onClick={() => { localStorage.clear(); setContactos([]) }}>Borrar storage</button>
                        <button id='contactoRandom' onClick={() => contactoAleatorio()}>Aleatorio</button>
                        <button onClick={() => setFormulario(true)}>+ Nuevo</button>
                    </div>
                    <div className="contactos-container">
                        {
                            //se van a mostrar los elementos que la funcion filtro() devuelva
                            filtro().map(element =>
                                (<ContactoPlano key={element.id} props={element} borrar={eliminarContacto} abrir={(e) => abrirContacto(e)} />))
                        }
                    </div>
                </div>
                {/* si mostrar es true muesta ContactoExpandido */}
                {mostrar && <ContactoExpandido props={contactoSeleccionado} cerrar={ocultarFormulario} />}
                {/* si formulario es true muestra CrearContacto */}
                {formulario && <CrearContacto crearContacto={crearContacto} btnCerrar={ocultarFormulario} />}
            </div>
        </>
    )
}

export { MainSection }