import React, { useState } from 'react'
import { Nav } from './Nav/Nav'
import { MainSection } from './MainSection/MainSection'
import './App.css'
import { ContactoExpandido } from './MainSection/ContactoExpandido/ContactoExpandido'


function App() {
  //variable a actualizar del filtro que se va a mandar al hijo
  const [grupoSeleccionado, setGrupoSeleccionado] = useState('todos')

  //Cambiar el state "grupo" en funcion a lo que recibe del hijo <Nav />
  const filtroGrupo = (grupo) => {
    setGrupoSeleccionado(grupo)
  }
    
//HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML
//HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML--HTML
  return (
    <>
      <div className="page-container">
        <Nav filtroGrupo = {filtroGrupo}/>
        {/* Envio el state "grupo" al hijo*/}
        <MainSection filtroGrupo = {grupoSeleccionado}/>
      </div>
    </>
  )
}

export default App
