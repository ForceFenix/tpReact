import React, { useState } from 'react'
import { Nav } from './Nav/Nav'
import { MainSection } from './MainSection/MainSection'
import './App.css'
import { ContactoExpandido } from './MainSection/ContactoExpandido/ContactoExpandido'


function App() {
  return (
    <>
      <div className="page-container">
        <Nav />
        <MainSection />
      </div>
    </>
  )
}

export default App
