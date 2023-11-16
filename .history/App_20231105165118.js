import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Routes from './routes';






export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    );

}

