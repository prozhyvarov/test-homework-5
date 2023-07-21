import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  font-size: 20px;
  padding: 2px;
  /* margin-bottom: 100px; */
  background-color: lightblue;
  color: #000;
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

export const StyledNavLink = styled(NavLink)`
display: inline-block;
  /* width: 100%; */
  text-decoration: none;
  font-size: 20px;
  padding: 2px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: lightblue;
  color: #000;
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

export const List = styled.ul`
    /* display: flex;
    flex-wrap: wrap; */
    gap: 10px;
`;