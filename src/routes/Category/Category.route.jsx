import React, { useContext, useState, useEffect, Fragment } from 'react';

// Recuperiamo la value di category
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/ProductCard/ProductCard.component.jsx';

import { CategoryContext } from '../../contexts/category.context';

import { CategoryContainer, CategoryTitle } from './Category.styles.jsx';

// Utilizza useEffect così da renderizzare ogni volta che la category
// o categoriesMap altrimenti renderizza il tutto ogni volta che il
// componente viene renderizzato
const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoryContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
      setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle className='category-title'>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => <ProductCard key={product.id} product={product} /> )
        }
      </CategoryContainer>
    </Fragment>
  )
}

export default Category;