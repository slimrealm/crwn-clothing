import styled from 'styled-components';

import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
  min-width: 130px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  font-weight: bolder;
  border: none;
  cursor: ${(props) => (props.disabled ? '' : 'pointer')};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => (props.disabled ? 'black' : 'white')};
    color: ${(props) => (props.disabled ? 'white' : 'black')};
    border: ${(props) => (props.disabled ? '' : '1px solid black')};
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  min-width: 150px;
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }

  @media screen and (max-width: 340px) {
    display: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: ${(props) => (props.disabled ? 'white' : 'black')};
    color: ${(props) => (props.disabled ? 'black' : 'white')};
    border: ${(props) => (props.disabled ? '' : 'none')};
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
