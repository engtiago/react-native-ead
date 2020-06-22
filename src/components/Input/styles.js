import styled from 'styled-components/native';

export const Container = styled.View`
  width:100%;
  height: 60px;
  padding: 0 16px;
  background: rgba(0, 0, 0, 0.1);
  border-radius:10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #000;
  font-size: 15px;
  font-family:'RobotoSlab-Regular'
  margin-left: 10px;
`;