import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  width: 50%;
  text-align: center;
  flex-direction: column;
  margin: 40px auto;
  padding: 40px 0;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 10px 10px black;
`;

export const ContainerLines = styled.ul`
  margin-top: 20px;
`;

export const StatList = styled.li`
  list-style: none;
  width: 60%;
  text-align: center;
  font-size: 32px;
  line-height: 1.6em;
  margin: 0 auto 0 auto;
  border: 1px solid black;
  border-radius: 4px;
  background-color: ${p => p.color};
`;

export const Percentage = styled.span`
  font-weight: 500;
`;
