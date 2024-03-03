import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <>
            <nav>
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
                        <li>Iniciar sesión</li>
                        <li>Registrarse</li>
                    </div>
                </ul>
            </nav >
        </>
    )
}

export { Nav }