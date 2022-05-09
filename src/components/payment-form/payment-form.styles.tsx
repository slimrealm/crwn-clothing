import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  height: 200px;
  display: flex;
  //flex-direction: column;
  //align-items: center;;
  margin-left: auto;
  margin-top: 50px;

  //background-color: yellow;
  //justify-self: right;
  padding: 15px;
  border: 1px solid darkgrey;
`;

export const FormContainer = styled.form`
  height: 200px;
  min-width: 300px;
  //background-color: lightgreen;
  display: flex;
  flex-direction: column;
  //align-items: space-a;
  //justify-content: center;
`;

export const PaymentHeader = styled.h2`
  text-align: right;
  //padding: 0;
  margin: 0 0 30px 0;
  //height: 200px;
`;

export const CardElementWrapper = styled.div`
  height: 50px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  //align-self: right;
  //margin-top: 30px;
  //margin-right: 0;
  //background-color: red;
  width: 100px;
`;
