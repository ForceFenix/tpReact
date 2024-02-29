import React from 'react';

const Hijo = ({props, random}) => {
    const {nombre, apellido, telefono} = props;


// HTML -- HTML -- HTML -- HTML -- HTML -- HTML -- HTML -- HTML
    return(
        <>
        <h2>{nombre}</h2>
        <h2>{apellido}</h2>
        <h2>{telefono}</h2>
        <h1>{random}</h1>
        </>
    )
}

export { Hijo }