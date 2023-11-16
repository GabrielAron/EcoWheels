import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './routes';


export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );

}

