import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import Fundo from './imagens';


const App = () => (
  <View style={styles.container}>
    <ImageBackground source={Fundo} style={styles.image}>
      <Text style={styles.text}>Carros</Text>


    </ImageBackground>
  </View>
);

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
  text: {
    color: 'white',
    fontSize: 18,
    position: 'absolute',
    top: 50, // Ajuste conforme necessário
    left: 125, // Ajuste conforme necessário
    fontWeight: 'bold',
  },
});

export default App;