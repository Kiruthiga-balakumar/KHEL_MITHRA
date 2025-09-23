import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../../screens/auth/LandingScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import RegisterScreen from '../../screens/auth/RegisterScreen';
import RoleSelectScreen from '../../screens/auth/RoleSelectScreen';
import AadhaarVerifyScreen from '../../screens/auth/AadhaarVerifyScreen';

export type AuthStackParamList = {
  Landing: undefined;
  Login: undefined;
  Register: { role: 'athlete' | 'coach' | 'official' };
  RoleSelect: undefined;
  AadhaarVerify: { role: 'athlete' | 'coach' | 'official' };
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Landing" component={LandingScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="RoleSelect" component={RoleSelectScreen} />
    <Stack.Screen name="AadhaarVerify" component={AadhaarVerifyScreen} />
  </Stack.Navigator>
);

export { AuthStack };


