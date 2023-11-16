import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';

export default function Reservas() {
 
  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <Text style={styles.text}>Reservas</Text>
      
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor:'#000000',
    justifyContent: 'center',
  },
  text: {
    color: '#fffeff',
    fontSize: 36,
   
    alignItems:'center',
  },
 
});
