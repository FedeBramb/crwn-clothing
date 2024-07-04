import { useContext } from 'react';

import Button, {BUTTON_TYPE_CLASSES} from '../Button/Button.component.jsx';

import { CartContext } from '../../contexts/cart.context.jsx';

import { Image, ProductCardContainer, Footer} from './ProductCard.styles.jsx';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl} = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
        <Image src={imageUrl} alt={`${name}`} />
        <Footer>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </Footer>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Aggiungi al carrello</Button>
    </ProductCardContainer>
  )
}

export default ProductCard;