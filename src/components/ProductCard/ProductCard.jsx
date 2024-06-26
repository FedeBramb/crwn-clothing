import { useContext } from 'react';

import Button from '../Button/Button';

import { CartContext } from '../../contexts/cart.context';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl} = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart}>Aggiungi al carrello</Button>
    </div>
  )
}

export default ProductCard;