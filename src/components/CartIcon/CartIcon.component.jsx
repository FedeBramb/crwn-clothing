import React,{ useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {IconContainer, ShopBagIcon, ItemCount} from './CartIcon.styles';


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <IconContainer>
        <ShopBagIcon className='shop-bag-icon' onClick={toogleIsCartOpen} />
        <ItemCount className='item-count'>{cartCount}</ItemCount>
    </IconContainer>
  )
}

export default CartIcon;