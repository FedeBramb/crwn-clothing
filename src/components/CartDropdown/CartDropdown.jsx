import React, { useContext } from 'react';

// Hook per la navigazione
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context.jsx';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem.jsx';


/* vedere se è aperto o non aperto */

import './CartDropdown.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
        </div>
        <Button onClick={goToCheckOutHandler}>Check out</Button>
    </div>
  )
}

export default CartDropdown;