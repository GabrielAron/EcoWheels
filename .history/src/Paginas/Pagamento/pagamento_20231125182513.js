
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';

export default function pagamento() {
  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <Text style={styles.text}>Pagamento</Text>
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
    top:'0'
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});