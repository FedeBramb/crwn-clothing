import React, { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context.jsx';

import CheckOutItem from '../../components/CheckOutItem/CheckOutItem.jsx';

import './CheckOut.scss';

const CheckOut = () => {
  const { cartItems, total } = useContext(CartContext);
  
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Prodotto</span>
        </div>
        <div className='header-block'>
         <span>Descrizione</span>
        </div>
        <div className='header-block'>
          <span>Quantità</span>
        </div>
        <div className='header-block'>
          <span>Prezzo</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
        {cartItems.map((cartItem) => {
          return (
            <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        )})}
        <span className='total'>Totale $ {total}</span>
    </div>  
  )
}

export default CheckOut;