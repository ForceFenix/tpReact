import React, { useState } from 'react';
import './Nav.css'

const Nav = ({ filtroGrupo }) => {

    const [mostrar, setMostrar] = useState(false)

    const mostrarNav = (mostrar) => {
        if(mostrar == true){
            return "nav-container nav--show"
        }
        else{
            return "nav-container nav--hide"
        }
    }
//HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML
//HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML
    return (
        <> 
            <button className='btnAbrir' onClick={() => setMostrar(true)}><i className="bi bi-list"></i></button>
            <nav className={mostrarNav(mostrar)}>
                <button className='btnCerrar' onClick={() => setMostrar(false)}><i className="bi bi-x"></i></button>
                <ul>
                    <div className="nav_filters">
                        <li onClick={() => filtroGrupo("todos")}><i className="bi bi-people"></i>Todos</li>
                        <li onClick={() => filtroGrupo("trabajo")}><i className="bi bi-building"></i>Trabajo</li>
                        <li onClick={() => filtroGrupo("estudio")}><i className="bi bi-bank"></i>Estudio</li>
                        <li onClick={() => filtroGrupo("amigos")}><i className="bi bi-emoji-smile"></i>Amigos</li>
                    </div>
                </ul>
            </nav >
        </>
    )
}

export { Nav }