import React,{ useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import ShopBagIcon from '../../assets/shopping-bag.svg?react';

import './CartIcon.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className='cart-icon-container'>
        <ShopBagIcon className='shop-bag-icon' onClick={toogleIsCartOpen} />
        <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon;