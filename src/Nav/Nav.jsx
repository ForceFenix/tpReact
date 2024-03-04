import React, { useState } from 'react';
import './Nav.css'

const Nav = () => {

    const [mostrar, setMostrar] = useState(false)

    const mostrarNav = (mostrar) => {
        if(mostrar == true){
            return "nav-container nav--show"
        }
        else{
            return "nav-container nav--hide"
        }
    }

    return (
        <> 
            <button className='btnAbrir' onClick={() => setMostrar(true)}><i className="bi bi-list"></i></button>
            <nav className={mostrarNav(mostrar)}>
                <button className='btnCerrar' onClick={() => setMostrar(false)}><i class="bi bi-x"></i></button>
                <ul>
                    <div className="nav_filters">
                        <li><i className="bi bi-people"></i>Todos</li>
                        <li><i className="bi bi-building"></i>Trabajo</li>
                        <li><i className="bi bi-bank"></i>Estudio</li>
                        <li><i className="bi bi-emoji-smile"></i>Amigos</li>
                    </div>
                    <div className="nav_option">
                        <li>Sobre mi</li>
                        <li>Contactame</li>
                    </div>
                </ul>
            </nav >
        </>
    )
}

export { Nav }