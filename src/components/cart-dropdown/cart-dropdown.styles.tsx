import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownWindow = styled.div`
  position: absolute;
  width: 240px;
  height: 355px;
  top: 20px;
  right: 20px;
  z-index: 5;
  padding: 0 5px;
  border: 1px solid black;
  background-color: white;
`;

export const CartDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: 15px;
  }
`;

export const CloseButtonHeader = styled.div`
  display: flex;
  justify-content: right;
  padding-bottom: 5px;
`;

export const CloseButton = styled.div`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`;
