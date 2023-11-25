import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import Fundo from '/imagens/fundoverde.jpg';
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.set

const Mapa = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Aeroporto Internacional de Guarulhos (GRU), São Paulo, SP', value: 'gru'},
    {label: 'Aeroporto Santos Dumont (SDU), Rio de Janeiro, RJ', value: 'sdu'},
    {label: 'Rodoviária Novo Rio, Rio de Janeiro, RJ', value: 'rnr'},
    {label: 'Aeroporto de Congonhas (CGH), São Paulo, SP', value: 'cgh'},
    {label: 'Aeroporto Internacional de Brasília (BSB), Brasília, DF', value: 'bsb'}
  ]);

  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={20} color="black" style={styles.icon} />
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Pesquisar"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            labelStyle={styles.dropdownLabel}
            arrowSize={0}
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
  dropdown: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  dropdownContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  dropdownLabel: {
    color: 'black',
    fontSize: 20,
  },
});

export default Mapa;
