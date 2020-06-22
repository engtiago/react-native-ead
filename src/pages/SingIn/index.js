import React from 'react';
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import logoImg from '../../assets/logo.png';
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
const SingIn = () => (
  <>
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flexGrow: 1}}>
        <Container>
          <Image source={logoImg} />
          <View>
            <Title>Faça seu logon</Title>
          </View>
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />
          <Button
            onPress={() => {
              console.log('oi');
            }}>
            Entrar
          </Button>
          <ForgotPassword
            onPress={() => {
              console.log('oi');
            }}>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>
        </Container>
        <CreateAccountButton>
          <Icon name="log-in" size={20}  color="#ff9000"/>
          <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
        </CreateAccountButton>
      </ScrollView>
     
    </KeyboardAvoidingView>
  </>
);
export default SingIn;
