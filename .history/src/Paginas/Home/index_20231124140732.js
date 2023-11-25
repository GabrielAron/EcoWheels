import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { format } from 'date-fns';

export default function App() {
  const [pickupDate, setPickupDate] = useState(format(new Date(), 'dd/MM/yyyy'));
  const [returnDate, setReturnDate] = useState(format(new Date(), 'dd/MM/yyyy'));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela_Pesquisa</Text>
      <TextInput style={styles.input} placeholder="Onde você quer retirar o carro" />
      <TextInput style={styles.input} placeholder="Onde você quer entregar o carro" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />  
      <TextInput style={styles.input} placeholder="Data de retirada" value={pickupDate} onChangeText={setPickupDate} />
      <TextInput style={styles.input} placeholder="Data de entrega" value={returnDate} onChangeText={setReturnDate} />
      <TextInput style={styles.input} placeholder="Você tem algum cupom de desconto?" />
      <Button title="Continuar" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ccc',
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