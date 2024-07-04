import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

import { UserProvider } from './contexts/user.context.jsx';
import { CategoryProvider } from './contexts/category.context.jsx';
import { CartOpenProvider } from './contexts/cart.context.jsx';

import './index.scss'


// Qualsiasi componente fuori da UserProvider non ha accesso al Context.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoryProvider>
          <CartOpenProvider>
            <App />
          </CartOpenProvider>
        </CategoryProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
