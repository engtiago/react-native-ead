import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#ffffff'},
    }}
    initialRouteName="SingUp"
    >
    <Auth.Screen name="SingIn" component={SingIn} />
    <Auth.Screen name="SingUn" component={SingUp} />
  </Auth.Navigator>
);

export default AuthRoutes;