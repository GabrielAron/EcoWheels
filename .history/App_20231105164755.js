import React from 'react';
import

import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import Fundo from './imagens/fundoverde.jpg';


const App = () => (
  <View style={styles.container}>
    <ImageBackground source={Fundo} style={styles.image}>
    </ImageBackground>
  </View>
);

export default function App(){
  return(
    <App />
  )

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

export default App;