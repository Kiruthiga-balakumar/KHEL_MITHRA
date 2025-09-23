import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { RootNavigator } from './src/navigation/RootNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { useEffect } from 'react';
import { configureNotifications } from './src/services/notifications';
import "react-native-gesture-handler";

export default function App() {
  useEffect(() => {
    configureNotifications();
  }, []);
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}


