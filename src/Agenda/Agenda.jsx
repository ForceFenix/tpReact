import React, { useState } from 'react';
import './Agenda.css'
import { ContactoPlano } from '../ContactoPlano/ContactoPlano';
import { CrearContacto } from '../CrearContacto/CrearContacto';

const Agenda = () => {


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
    ]


    // paso al localStorage el listado de contactos , volviendolo string con JSON.stringify (EL LOCAL STORAGE SOLO ALMACENA STRING)
    localStorage.setItem("listado", JSON.stringify(listado));
    // guardo en una variable el paso en reversa de lo hecho en la linea anterior para futuros cambios




    var mapListado = JSON.parse(localStorage.getItem("listado")).map(element => (
        <ContactoPlano key={element.id} props={element} />
    ));

    const [contactos, setContactos] = useState(mapListado);

    var filtro = palabraClave => {
        let filtrado = JSON.parse(localStorage.getItem("listado")).filter(element => element.grupo == palabraClave);
        setContactos(filtrado.map(element =>
            (<ContactoPlano key={element.id} props={element} />)))
    }




    var todos = () => setContactos(mapListado)
    return (
        <>
            <main>
                <aside>
                    <div className="aside-container">
                        <div className="nuevo-contacto">
                            <button>+</button>
                        </div>
                        <div className="filtros-container">

                            <div className="filtro-amigos filtro">
                                <button onClick={() => filtro("amigos")}>amigos</button>
                            </div>
                            <div className="filtro-trabajo filtro">
                                <button onClick={() => filtro("trabajo")}>trabajo</button>
                            </div>
                            <div className="filtro-estudio filtro">
                                <button>estudio</button>
                            </div>
                            <div className="filtro-desconocido filtro">
                                <button>desconocido</button>
                            </div>
                        </div>
                        <div className="filtro-todos filtro">
                            <button onClick={() => todos()}>todos</button>
                        </div>
                    </div>
                </aside>
                <section className="agenda-container">
                    <div className="listado">
                        {contactos}
                    </div>
                </section>
            </main>

        </>
    )
}

export { Agenda }


