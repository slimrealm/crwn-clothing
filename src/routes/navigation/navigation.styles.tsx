import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  border-bottom: 1px solid darkgrey;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 15px 0;
  margin-right: 30px;
`;

export const NavLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  width: clamp(10px, 60px, 60px);
  cursor: pointer;
`;
