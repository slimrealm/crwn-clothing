import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 15px;
  row-gap: 50px;

  //display: flex;
  //justify-content: space-between;

  @media screen and (max-width: 800px) {
    //display: grid;
    //align-items: center;
    grid-template-columns: 1fr 1fr;
    padding: 0 5px;
    //grid-gap: 15px;
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
