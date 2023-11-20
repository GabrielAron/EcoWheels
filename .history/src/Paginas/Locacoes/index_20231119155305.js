import React from 'react';
import { View, Text, ImageBackground, Button, StyleSheet, ScrollView } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';
import Carro1 from '/imagens/Carro1.jpg';
import Carro1 from '/imagens/Carro1.jpg';


const Card = ({ title, image }) => (
  <View style={styles.card}>
    <ImageBackground source={{ uri: image }} style={styles.image}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Button title="Reservar" onPress={() => {}} />
      </View>
    </ImageBackground>
  </View>
);

export default function Reservas() {
  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <Text style={styles.text}>Carros</Text>
        <View style={styles.cardContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Card title="QUALIDADE PARA UM CONFORTO E ÓTIMO PASSEIO" image='/imagens/Carro1.jpg' />
            <Card title="DESIGN E CONFORTO EM UM Rider GT 3.0 ou similar" image="https://s2-autoesporte.glbimg.com/mYgwlPa7vtIiUk6kROUxJUi2yyo=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/a/4/Ik8J1fQYirf6wYRvRJ8Q/2020-03-20-novo-tracker-1.jpg" />
            <Card title="FORÇA PARA DESAFIOS OFF-Road Viper GT 3.0 ou similar" image={Carro1} />
            <Card title="FORÇA PARA DESAFIOS OFF-Road Viper GT 3.0 ou similar" image="url_da_imagem_3" />
            <Card title="NOVO CARD" image="url_da_imagem_4" />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: '#fffeff',
    fontSize: 36,
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 200,
    paddingLeft: 35,
  },
  card: {
    width: '90%',
    height: 200,
    marginBottom: 45,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});