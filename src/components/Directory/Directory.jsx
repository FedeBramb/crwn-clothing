import React from 'react';

import CategoryItem from "../CategoryItem/CategoryItem.jsx"

import './Directory.scss'

export const Directory = ({ categories }) => {  
  return (
    <>
      <div className='directory-container'>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </>
  )
}

export default Directory;
