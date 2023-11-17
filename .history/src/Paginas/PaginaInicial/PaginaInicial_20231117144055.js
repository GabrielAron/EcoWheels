import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Fundo from './imagens/fundoverde.jpg';
import Logo from './imagens/Logo.png';

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} resizeMode="contain" />
        </View>

        <TouchableOpacity style={styles.buttonEntrar}>
          <Text style={styles.buttonTextEntrar}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCadastrar}>
          <Text style={styles.buttonTextCadastrar}>Cadastrar</Text>
        </TouchableOpacity>

        
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
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '70%',
  },
  buttonEntrar: {
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  buttonTextEntrar: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonCadastrar: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  buttonTextCadastrar: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});