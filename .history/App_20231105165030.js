import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Routes from './routes';


import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import Fundo from './imagens/fundoverde.jpg';


const App = () => (
  <View style={styles.container}>
    <ImageBackground source={Fundo} style={styles.image}>
    </ImageBackground>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Routes
    </NavigationContainer>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

});

