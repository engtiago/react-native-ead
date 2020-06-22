import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';
const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <View style={{flex: 1, backgroundColor: '#312e28'}}>
      <Routes></Routes>
    </View>
  </NavigationContainer>
);

export default App;
