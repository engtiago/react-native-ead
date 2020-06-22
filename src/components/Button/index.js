import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler'
import {Container, ButtonText} from './styles';
import PropTypes from 'prop-types';



const Button = ({children , ...rest}) => (
  <Container {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

Button.propTypes = {
  children: PropTypes.string.isRequired
};


export default Button;
