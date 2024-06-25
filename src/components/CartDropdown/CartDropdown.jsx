import React, { useEffect } from 'react';



import Button from '../Button/Button';


/* vedere se è aperto o non aperto */

import './CartDropdown.scss';

const CartDropdown = () => {
    
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'/>
        <Button>Check out</Button>
    </div>
  )
}

export default CartDropdown;