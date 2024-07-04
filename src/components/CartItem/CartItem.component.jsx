import React from 'react';

import {ItemContainer, ItemImg, ItemDetails, Name} from './CartItem.styles'

const CartItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
  return (
    <ItemContainer>
      <ItemImg src={imageUrl} alt={`${name}`}/>
      <ItemDetails>
        <Name>{name}</Name>
        <span>{quantity} x ${price}</span>
      </ItemDetails>
    </ItemContainer>
  )
}

export default CartItem;