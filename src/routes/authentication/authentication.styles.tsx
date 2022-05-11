import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 680px) {
    flex-direction: column;
    align-items: left;
    max-width: 345px;
    margin: 0 auto;
  }
`;
