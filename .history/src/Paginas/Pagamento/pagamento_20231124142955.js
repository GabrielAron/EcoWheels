import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import Fundo from './imagens/fundoverde.jpg';

export default function pagamento() {
  return (
    <ImageBackground source={Fundo} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>Tela_Pesquisa</Text>
        <TextInput style={styles.input} placeholder="Onde você quer retirar o carro" />
        <TextInput style={styles.input} placeholder="Onde você quer entregar o carro" />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />  
        <TextInput style={styles.input} placeholder="Data de retirada" />
        <TextInput style={styles.input} placeholder="Data de entrega" />
        <TextInput style={styles.input} placeholder="Você tem algum cupom de desconto?" />
        <Button title="Continuar" onPress={() => {}} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    textAlign: 'center',
  },
});
