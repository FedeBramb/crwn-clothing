import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/Navigation.jsx';
import Home from './routes/home/Home.jsx';
import Authentication from './routes/authentication/Authentication.jsx';

import './App.css'

/* index viene utilizzato per definire la route figlio predefinita all'interno di una route genitore*/
function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='auth' element={<Authentication />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
