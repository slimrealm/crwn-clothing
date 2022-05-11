import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  //margin: 50px;

  @media screen and (max-width: 680px) {
    flex-direction: column;
    align-items: left;
    //background-color: lightgreen;
    max-width: 345px;
    margin: 0 auto;
  }
`;
