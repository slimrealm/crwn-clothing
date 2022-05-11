import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 90%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  div:nth-child(2) {
    padding-left: 3%;
  }

  @media screen and (max-width: 370px) {
    div:nth-child(2) {
      display: none;
    }
  }
`;

export const BaseHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 20%;

  @media screen and (max-width: 370px) {
    width: 25%;
  }
`;

export const LeftAlignedBlock = styled(BaseHeaderBlock)`
  text-align: left;
`;

export const CenterAlignedBlock = styled(BaseHeaderBlock)`
  text-align: center;
`;

export const RightAlignedBlock = styled(BaseHeaderBlock)`
  text-align: right;
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
