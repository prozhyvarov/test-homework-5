import styled from 'styled-components';

export const ReviewsList = styled.ul`
  width: 500px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
`;

export const ReviewsItem = styled.li`
  width: 100%;
  text-decoration: none;
  font-size: 20px;
  padding: 2px;
  background-color: lightblue;
  color: #000;
  border: solid 1px orange;
`;
