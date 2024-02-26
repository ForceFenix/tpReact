import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Agenda } from './Agenda/Agenda.jsx'
import { Nav } from './Nav/Nav.jsx'
import { CrearContacto } from './CrearContacto/CrearContacto.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Agenda />
    <CrearContacto />
  </React.StrictMode>,
)
