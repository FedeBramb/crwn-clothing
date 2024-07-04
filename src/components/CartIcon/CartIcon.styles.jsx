import styled from "styled-components";

import ShopBagSvg from '../../assets/shopping-bag.svg?react';

export const IconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const ShopBagIcon = styled(ShopBagSvg)`
  width: 24px;
  height: 24px;
`


export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`