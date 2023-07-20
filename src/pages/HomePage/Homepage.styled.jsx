import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PageHeader = styled.h2`
  width: 496px;
padding: 2px;
padding-bottom: 10px;
border-radius: 15px;
  margin-bottom: 15px;
  margin-top: 15px;
  text-align: center;
  font-size: 40px;
  color: orange;
  background-color: #fff;
`;

export const MoviesList = styled.ul`
  width: 500px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
`;

export const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  font-size: 20px;
  padding: 2px;
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
