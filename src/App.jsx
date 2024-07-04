import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/Navigation.component.jsx';
import Home from './routes/home/Home.jsx';
import Authentication from './routes/authentication/Authentication.route.jsx';
import Shop from './routes/shop/Shop.route.jsx';
import CheckOut from './routes/CheckOut/CheckOut.route.jsx';

import './App.css'

/* Index viene utilizzato per definire la route figlio predefinita all'interno di una route genitore
    * asterisco fa determinare a Shop la route figlia */

function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={ <CheckOut />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
