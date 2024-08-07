import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../../components/Categories-Preview/Categories-Preview';
import Category from '../Category/Category.route';


const Shop = () => {
    
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop;