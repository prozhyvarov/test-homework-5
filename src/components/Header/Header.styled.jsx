import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: center;
  gap:20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  padding: 12px;
  background-color: lightblue;
  color: #000;
  border-radius: 15px;
  border: solid 1px orange;

  &:hover {
    background-color: orange;
    color: #fff;
  }
  &:focus {
    background-color: orange;
    color: #fff;
  }
`;
