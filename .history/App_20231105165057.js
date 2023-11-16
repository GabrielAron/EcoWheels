import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Routes from './routes';


import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import Fundo from './imagens/fundoverde.jpg';




export default function App() {
  return (
    <NavigationContainer>
      <Routes></Routes>
    </NavigationContainer>
    );

}

