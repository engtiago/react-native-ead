import React from 'react';
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import {Container, Title, BackToSignIn, BackToSignInText} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
const SingUp = () => {
  const navigation = useNavigation();
  return (
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
              <Title>Crie sua conta</Title>
            </View>
            <Input name="name" icon="user" placeholder="Nome" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />
            <Button
              onPress={() => {
                console.log('oi');
              }}>
              Entrar
            </Button>
          </Container>
          <BackToSignIn
            onPress={() => {
              navigation.navigate('SingIn');
            }}>
            <Icon name="arrow-left" size={20} color="#ff9000" />
            <BackToSignInText>Voltar para logon</BackToSignInText>
          </BackToSignIn>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
export default SingUp;
