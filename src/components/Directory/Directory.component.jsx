import React from 'react';

import DirectoryItem from "../DirectoryItem/DirectoryItem.component.jsx"

import { DirectoryContainer } from './Directory.styles';



const categories = [
  {
    "id": 1,
    "title": "Cappelli",
    "imageUrl": "https://i.ibb.co/929ykzP/hats.png",
    "route": "shop/hats"
  },
  {
    "id": 2,
    "title": "Giacche",
    "imageUrl": "https://i.ibb.co/q5bsPkr/jackets.png",
    "route": 'shop/jackets'
  },
  {
    "id": 3,
    "title": "Sneakers",
    "imageUrl": "https://i.ibb.co/H4ZdyGx/sneakers.png",
    "route": 'shop/sneakers'
  },
  {
    "id": 4,
    "title": "Donna",
    "imageUrl": "https://i.ibb.co/KDV0J8W/woman.png",
    "route": 'shop/womens'
  },
  {
    "id": 5,
    "title": "Uomo",
    "imageUrl": "https://i.ibb.co/1T9pntg/man.png",
    "route": 'shop/mens'
  }
]

// Componente presente nell'home page con i vari collegamenti alle categorie
export const Directory = () => {  
  return (
    <>
      <DirectoryContainer>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoryContainer>
    </>
  )
}

export default Directory;
