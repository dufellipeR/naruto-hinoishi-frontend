import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #711a19;
  height: 56px;
  border-radius: 10px;
  border: 0px solid #232129;
  padding: 0 16px;
  width: 100%;
  color: white;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#711A19')};
  }
`;
