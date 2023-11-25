import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Fundo from '/imagens/fundoverde.jpg';

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
  dropdown: {
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
