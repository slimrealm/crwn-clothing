import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 190px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  //justify-content: center;

  @media screen and (max-width: 370px) {
    div:nth-child(2) {
      display: none;
      //background-color: green;
    }
  }
`;

export const BaseDiv = styled.div`
  text-align: center;
  width: 20%;

  @media screen and (max-width: 370px) {
    width: 25%;
  }
`;

export const ImageContainer = styled(BaseDiv)`
  //padding-right: 15px;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Description = styled(BaseDiv)`
  text-align: left;
  padding-left: 3%;

  @media screen and (max-width: 370px) {
    display: none;
  }
`;

export const Quantity = styled(BaseDiv)`
  justify-content: right;
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 5px;
`;

export const Price = styled(BaseDiv)`
  text-align: right;
`;

export const RemoveButton = styled(BaseDiv)`
  //padding-left: 12px;
  //justify-content: center;
  text-align: right;
  font-weight: bold;
  cursor: pointer;
`;
