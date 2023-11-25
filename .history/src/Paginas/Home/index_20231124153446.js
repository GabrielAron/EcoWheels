import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';

export default function Home() {
  const [promoCode, setPromoCode] = useState('');
  const [showAppliedModal, setShowAppliedModal] = useState(false);

  const handlePromoCodeChange = (text) => {
    setPromoCode(text);
  };

  const handleContinue = () => {
    // Verificar o código do cupom
    if (promoCode === 'CUPOM123') {
      setShowAppliedModal(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite suas informações</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o cupom de desconto"
        value={promoCode}
        onChangeText={handlePromoCodeChange}
      />
      <Button title="Continuar" onPress={handleContinue} />

      <Modal visible={showAppliedModal} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Cupom de desconto aplicado!!!</Text>
            <Button title="Fechar" onPress={() => setShowAppliedModal(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
});