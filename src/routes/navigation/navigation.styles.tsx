import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  //align-items: center;
  //padding: 0 5px 0 15px;
  margin-bottom: 25px;
  border-bottom: 1px solid darkgrey;

  //position: sticky;
  //top: 0px;
  //z-index: 4;
  //background-color: white;
  //@media screen and (max-width: 800px) {
  //height: 60px;
  //padding: 10px;
  //margin-bottom: 20px;
  //}
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  //width: 70px;
  padding: 15px 0;
  margin-right: 30px;

  //@media screen and (max-width: 800px) {
  //width: 50px;
  //padding: 0;
  //}
`;

export const NavLinks = styled.div`
  //width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  //@media screen and (max-width: 800px) {
  //width: 80%;
  //}
`;

export const NavLink = styled(Link)`
  width: clamp(10px, 60px, 60px);
  //padding-left: 10px;
  cursor: pointer;
`;
