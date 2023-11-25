import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, Picker, TouchableOpacity } from 'react-native';
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
          <Picker
            selectedValue={selectedValue}
            style={styles.input}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Pesquisar" value="" />
            {locations.map((location, index) => (
              <Picker.Item key={index} label={location} value={location} />
            ))}
          </Picker>
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
    justifyContent: 'flex-start', // Alinha o conteúdo para o início (topo) da página
  },
  searchContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 100,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    padding: 15,
    marginTop: 30,
  },
  input: {
    color: 'white',
    fontSize: 20,
  },
});

export default Mapa;
