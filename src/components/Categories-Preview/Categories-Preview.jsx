import { useContext, Fragment } from 'react';

import { CategoryContext } from '../../contexts/category.context.jsx';

import CategoryPreview from '../CategoryPreview/CategoryPreview.component.jsx';


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoryContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products} />
  })}
    </Fragment> 
  )
}

export default CategoriesPreview;