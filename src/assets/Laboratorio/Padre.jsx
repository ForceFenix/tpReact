import React, { useState } from 'react';
import { Hijo } from './Hijo';


const Padre = () => {
    const lista = [
        {
            nombre: "fede",
            apellido: "perez",
            telefono: 12345879
        },
        {
            nombre: "luis",
            apellido: "perez",
            telefono: 12345879
        },
        {
            nombre: "olga",
            apellido: "bernachea",
            telefono: 12345879
        }
    ]

    return (
        <>
        {
            lista.map(element => (
                <Hijo random= "algo" props = {element}/>
            ))
        }

        </>
    )
}

export { Padre }