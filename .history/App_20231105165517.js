import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './routes.js';


export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    );

}

