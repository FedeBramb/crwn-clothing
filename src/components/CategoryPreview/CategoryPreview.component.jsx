import React from 'react';

import { PreviewContainer, Title, Preview } from './CategoryPreview.styles';

import ProductCard from '../ProductCard/ProductCard.component';


const CategoryPreview = ({ title, products }) => {
  return (
    <PreviewContainer>
      <h2>
          <Title to={title} className='title'>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
          {
              products
              .filter((_, index) => index < 4)
              .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
          }
      </Preview>
    </PreviewContainer>
  )
}

export default CategoryPreview