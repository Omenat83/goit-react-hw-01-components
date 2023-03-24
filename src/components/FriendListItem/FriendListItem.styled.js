import styled from 'styled-components';

export const FriendCard = styled.li`
  width: 80%;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  padding: 10px 0 10px 20px;

  &:nth-child(n + 2) {
    margin-top: 15px;
  }
`;

export const Status = styled.span`
  background-color: aqua;
  border-radius: 50%;
  width: 20px;
  height: 20px;

  background-color: ${p => {
    return p.isOnline ? 'green' : 'red';
  }};
`;
