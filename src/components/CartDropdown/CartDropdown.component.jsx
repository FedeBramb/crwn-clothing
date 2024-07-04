import React, { useContext } from 'react';

// Hook per la navigazione
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context.jsx';

import { CartDropdownContainer, CartItemsContainer, EmptyMessage  } from './CartDropdown.styles';

import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component.jsx';


const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
        <CartItemsContainer>
          { cartItems.length ? (
            cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <EmptyMessage>Il tuo carrello è vuoto</EmptyMessage>
          )}
        </CartItemsContainer>
        <Button onClick={goToCheckOutHandler}>Check out</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown;