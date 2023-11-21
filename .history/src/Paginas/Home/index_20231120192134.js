import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';

const Home = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [returnLocation, setReturnLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [couponCode, setCouponCode] = useState('');

  const handleContinue = () => {
    // Lógica para continuar após o botão "Continuar" ser pressionado
    // Aqui você pode implementar a validação do cupom de desconto e outras ações necessárias
    console.log('Continuar pressionado');
  };

  return (
    <ImageBackground source={require('./F')} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
       <Image source={require('./Logo_EletriCar.png')} style={styles.logo} resizeMode="contain" />
        <View style={styles.overlay}>
          <TextInput
            style={styles.input}
            placeholder="Onde você quer retirar seu carro?"
            value={pickupLocation}
            onChangeText={(text) => setPickupLocation(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Onde você quer devolver o carro?"
            value={returnLocation}
            onChangeText={(text) => setReturnLocation(text)}
          />
          <View style={styles.datePickerContainer}>
           <DatePicker
          style={{ width: '100%', marginBottom: 10 }}
          date={pickupDate}
          mode="date"
          placeholder="Data de retirada"
          format="YYYY-MM-DD"
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          onDateChange={(date) => setPickupDate(date)}
        />
        <DatePicker
          style={{ width: '100%', marginBottom: 10 }}
          date={returnDate}
          mode="date"
          placeholder="Data de devolução"
          format="YYYY-MM-DD"
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          onDateChange={(date) => setReturnDate(date)}
        />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Cupom de desconto"
            value={couponCode}
            onChangeText={(text) => setCouponCode(text)}
          />
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueButtonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 20,
    margin: 20,
    height: 350,
  },
  logo: {
    width: 100,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: -320,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 8,
    paddingHorizontal: 10,
    marginTop: 15,
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  datePicker: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginRight: 5,
  },
  continueButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Home;