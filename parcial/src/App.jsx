import { useState } from 'react'
import './App.css'
import Dogis from './Components/VistaPrincipal'
import UpdateTask from './Components/Detalle';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dogis />} exact />        
          <Route path="/update" element={<UpdateTask />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
