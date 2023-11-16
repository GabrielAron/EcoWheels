import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/b';
import Routes from './routes';


export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );

}

