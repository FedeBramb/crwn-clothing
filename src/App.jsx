import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/Navigation.jsx';
import Home from './routes/home/Home.jsx';
import SignIn from './routes/sign-in/SignIn.jsx';

import './App.css'

/* index viene utilizzato per definire la route figlio predefinita all'interno di una route genitore*/
function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='sign-in' element={<SignIn />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
