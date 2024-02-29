import React from 'react'
import ReactDOM from 'react-dom/client'
import { Nav } from './Nav/Nav.jsx'
import { MainSection } from './MainSection/MainSection.jsx'
import { Padre } from './assets/Laboratorio/Padre.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <MainSection />
  </React.StrictMode>,
)
