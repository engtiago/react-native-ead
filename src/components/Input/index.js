import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import { Container, TextInput } from './styles';

const Input = ({ name, icon, ...rest }) => (
  
    <Container>
      <Icon name="mail" size={20} color="rgba(0,0,0,0.5)"/>
      <TextInput placeholderTextColor="rgba(0,0,0,0.5)" {...rest}  />
    </Container>
  
);


Input.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired
};


export default Input
