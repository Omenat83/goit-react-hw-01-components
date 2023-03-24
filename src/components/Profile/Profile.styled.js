import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 50%;
  text-align: center;
  flex-direction: column;
  margin: 40px auto;
  padding: 60px 0;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 10px 10px black;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 58px;
  line-height: 2.4em;
`;

export const List = styled.li`
  font-size: 32px;
  line-height: 1.6em;
`;
