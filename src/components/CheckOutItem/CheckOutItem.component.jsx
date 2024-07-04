import React from 'react';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { 
  CheckOutItemContainer, 
  ImageContainer, 
  Img, 
  Name, 
  QuantityContainer, 
  Price, 
  ArrowContainer, 
  Value, 
  RemoveIcon
} from './CheckOutItem.styles';

const CheckOutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity, id } = cartItem;
    const { clearItem, removeItem, addItemToCart } = useContext(CartContext);

    const clearItemHandler = () => clearItem(id);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItem(id);

  return (
    <CheckOutItemContainer>
        <ImageContainer>
            <Img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <Name> {name} </Name>
        <QuantityContainer>
            <ArrowContainer onClick={removeItemHandler}>&#10094;</ArrowContainer>
            <Value>{quantity}</Value>
            <ArrowContainer onClick={addItemHandler}>&#10095;</ArrowContainer>
        </QuantityContainer>
        <Price>$ {price}</Price>
        <RemoveIcon onClick={clearItemHandler}>&#10005;</RemoveIcon>
    </CheckOutItemContainer>
  )
}

export default CheckOutItem;