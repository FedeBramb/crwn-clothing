import React, { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context.jsx';

import CheckOutItem from '../../components/CheckOutItem/CheckOutItem.component.jsx';

import { CheckOutContainer, CheckOutHeader } from './CheckOut.styles';

const CheckOut = () => {
  const { cartItems, total } = useContext(CartContext);
  
  return (
    <CheckOutContainer>
      <CheckOutHeader>
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
      </CheckOutHeader>
        {cartItems.map((cartItem) => {
          return (
            <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        )})}
        <span className='total'>Totale $ {total}</span>
    </CheckOutContainer>  
  )
}

export default CheckOut;