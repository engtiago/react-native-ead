import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px 50px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #312e28;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: relative;
  left: 0;
  bottom: 0;
  right: 0;
  border-top-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #ff9000;
  font-size: 18px;
  margin-left: 5px;
  font-family: 'RobotoSlab-Regular';
`;
