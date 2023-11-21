import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Fundo from '/imagens/fundoverde.jpg';

const Mapa = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Texto de pesquisa:', searchText);
  };

  const handleClearSearch = () => {
    setSearchText('');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={20} color="white" style={styles.icon} />
          <TextInput
            placeholder="Pesquisar"
            placeholderTextColor="white"
            style={styles.input}
            value={searchText}
            onChangeText={text => setSearchText(text)}
            onSubmitEditing={handleSearch}
            selectionColor="transparent"
          />
          {searchText !== '' && (
            <TouchableOpacity onPress={handleClearSearch}>
              <FontAwesome name="times" size={20} color="white" style={styles.clearIcon} />
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 100,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    padding:15,
    marginTop: 30,
   
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 20,
  },
});

export default Mapa;