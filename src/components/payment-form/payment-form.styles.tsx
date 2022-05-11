import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  height: 200px;
  display: flex;
  margin-left: auto;
  margin-top: 50px;

  padding: 15px;
  border: 1px solid darkgrey;
`;

export const FormContainer = styled.form`
  height: 200px;
  min-width: 270px;
  display: flex;
  flex-direction: column;
`;

export const PaymentHeader = styled.h2`
  text-align: right;
  margin: 0 0 30px 0;
`;

export const CardElementWrapper = styled.div`
  height: 50px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  width: 100px;
`;
