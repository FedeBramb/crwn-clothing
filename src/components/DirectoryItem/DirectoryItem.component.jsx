import React from 'react';

import { useNavigate } from 'react-router-dom';

import { BackgroundImage, Body, DirectoryItemContainer } from './DirectoryItem.styles';

function DirectoryItem({ category }) {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
        <BackgroundImage $imageUrl={imageUrl} /> { /* $per non fare triggerare la console errori con custom prop */}
        <Body>
            <h2>{title}</h2>
            <p>Compra ora</p>
        </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem;