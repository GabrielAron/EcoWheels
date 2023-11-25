import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Fundo from '/imagens/fundoverde.jpg';

const Mapa = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const locations = [
    'Aeroporto Internacional de Guarulhos (GRU), São Paulo, SP',
    'Aeroporto Santos Dumont (SDU), Rio de Janeiro, RJ',
    'Rodoviária Novo Rio, Rio de Janeiro, RJ',
    'Aeroporto de Congonhas (CGH), São Paulo, SP',
    'Aeroporto Internacional de Brasília (BSB), Brasília, DF'
  ];

  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={20} color="black" style={styles.icon} />
          <TextInput
            placeholder="Pesquisar"
            placeholderTextColor="black"
            style={styles.input}
            value={selectedValue}
            onChangeText={text => setSelectedValue(text)}
            selectionColor="transparent"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 100,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    padding: 15,
    marginTop: 30,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'black',
    fontSize: 20,
  },
});

export default Mapa;
