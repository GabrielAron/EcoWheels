import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput, Menu, Provider } from 'react-native-paper';
import Fundo from '/imagens/fundoverde.jpg';

const Mapa = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');

  const locations = [
    'Aeroporto Internacional de Guarulhos (GRU), São Paulo, SP',
    'Aeroporto Santos Dumont (SDU), Rio de Janeiro, RJ',
    'Rodoviária Novo Rio, Rio de Janeiro, RJ',
    'Aeroporto de Congonhas (CGH), São Paulo, SP',
    'Aeroporto Internacional de Brasília (BSB), Brasília, DF'
  ];

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View style={styles.container}>
        <ImageBackground source={Fundo} style={styles.image}>
          <View style={styles.searchContainer}>
            <FontAwesome name="search" size={20} color="black" style={styles.icon} />
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <TextInput
                  mode="outlined"
                  placeholder="Pesquisar"
                  value={value}
                  onFocus={openMenu}
                  style={styles.input}
                />
              }
            >
              {locations.map((location, index) => (
                <Menu.Item key={index} onPress={() => { setValue(location); closeMenu(); }} title={location} />
              ))}
            </Menu>
          </View>
        </ImageBackground>
      </View>
    </Provider>
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
    marginHorizontal: 20,
    marginTop: 30,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default Mapa;
