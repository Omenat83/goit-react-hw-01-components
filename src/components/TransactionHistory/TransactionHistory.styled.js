import styled from 'styled-components';

export const Table = styled.table`
  width: 50%;
  margin: 40px auto;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 10px 10px black;
  border-spacing: 0;
`;

export const Thead = styled.thead`
  background-color: lightblue;
`;

export const Head = styled.th`
  border: 1px solid black;
  padding: 10px 0;
`;

export const TableBody = styled.tbody`
  font-size: 30px;
  text-align: center;
`;

export const TableLine = styled.tr`
  /* border-spacing: 2px;
border: 1px solid black; */
`;

export const TableCell = styled.td`
  border: 1px solid black;
  padding: 2px 0;
`;
